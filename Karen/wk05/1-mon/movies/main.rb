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
  file = File.open('history.txt', 'a') #append mode
    file.puts(params[:title])
    file.close


  movie_request = "http://www.omdbapi.com/?apikey=2f6435d9&s=#{params[:title]}"
  @movies = HTTParty.get(movie_request)

  counter = 0
  @movie_results = []
  while counter < @movies["Search"].length do
    @name = @movies["Search"][counter]["Title"]
    @imdbID = @movies["Search"][counter]["imdbID"]
    counter += 1
    @movie_results.push({name: @name, id: @imdbID})
  end

  if @movie_results.length == 1
    show_movie(@movie_results.first[:id])
  else
    erb :movies
  end

end

def show_movie(id)
  movie_request = "http://www.omdbapi.com/?apikey=2f6435d9&i=#{id}"
  @result = HTTParty.get(movie_request)
  erb :movie
end

get '/movie' do
  show_movie(params[:id])
end

get '/history' do
  file = File.readlines('history.txt')
  @list = file #array of queries
  erb :history
end
