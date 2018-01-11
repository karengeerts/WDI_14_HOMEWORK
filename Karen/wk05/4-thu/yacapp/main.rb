
require 'sinatra'
require 'sinatra/reloader'
require 'pg'
require 'pry'

get '/' do
  conn = PG.connect(dbname: 'yacapp')
  sql = "SELECT * FROM cute_kittens;"
  @kittens = conn.exec(sql)
  conn.close
  erb :index
end

get '/cute_kittens/new' do
  erb :new
end

post '/cute_kittens' do
  conn = PG.connect(dbname: 'yacapp')
  #exectue a sql statement
  sql = "INSERT INTO cute_kittens (name, skillz, image_url) VALUES ('#{params[:name]}','#{params[:skillz]}','#{params[:image_url]}');"
  conn.exec(sql)
  #close the db connection
  conn.close
  redirect '/'
end

get '/cute_kittens/:id' do
  # get single dish with this id
  # show it in show template
  conn = PG.connect(dbname: 'yacapp')
  sql_single = "SELECT * FROM cute_kittens WHERE id=#{params[:id]};"
  @kitten = conn.exec(sql_single).first #exec returns an array of hashes, @dish is array of 1 hash
  conn.close
  #binding.pry
  erb :show
end

post '/cute_kittens/:id/delete' do
  #return "deleting dish #{params[:id]}..."
  #prepare sql with right id
  conn = PG.connect(dbname: 'yacapp')
  sql = "DELETE FROM cute_kittens WHERE id=#{params[:id]};"
  # execute
  conn.exec(sql)
  conn.close
  # redirect to '/'
  redirect '/'
end
