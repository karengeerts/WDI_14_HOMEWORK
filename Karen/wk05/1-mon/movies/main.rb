#API key = 2f6435d9
# http://www.omdbapi.com/?apikey=2f6435d9&t=jaws
require 'sinatra'
require 'sinatra/reloader'
require 'httparty'


get '/' do
  erb :index
end

get '/about' do
  erb :about
end


get '/movie_input' do
  title = params[:title]
  movie_request = "http://www.omdbapi.com/?apikey=2f6435d9&t=" + title.to_s
  @result = HTTParty.get(movie_request)
  erb :movie
end
