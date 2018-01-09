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
  erb :movies
end

get '/movie' do
  movie_request = "http://www.omdbapi.com/?apikey=2f6435d9&i=#{params[:id]}"
  @result = HTTParty.get(movie_request)
  erb :movie
end