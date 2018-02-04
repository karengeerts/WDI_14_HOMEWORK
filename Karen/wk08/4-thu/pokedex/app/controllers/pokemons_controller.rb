class PokemonsController < ApplicationController

  def index
    @pokemons = Pokemon.all
    render :index
  end

  def create
    p = Pokemon.new
    p.nickname = params[:nickname]
    p.species = params[:species]
    p.level = params[:level]
    if p.save
      redirect_to '/pokemons'
    else
      render :new
    end
  end

  def search
    @results = Pokemon.where("species ILIKE ?", params[:species])
    if !@results
      @message = "No Pokemons found of that species."
    end
  end

end
