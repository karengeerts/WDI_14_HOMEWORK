require 'sinatra'
require 'sinatra/reloader'
require 'stock_quote'

get '/' do
  stock = params[:stock]
  if stock == "APPL"
    res = StockQuote::Stock.quote("GOOGL").l
    @message = "The current exchange rate for Google is " + res + " USD."
  else
    res = StockQuote::Stock.quote(stock).l
    @message = "The current exchange rate for " + stock + " is " + res + " USD."
  end
  erb(:index)
end

get '/about' do
  @message = "Goodbye to Yahoo finance."
  erb(:about)
end
