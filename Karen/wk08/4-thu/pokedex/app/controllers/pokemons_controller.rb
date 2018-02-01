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

  def show
    @pokemon = Pokemon.find_by(species:params[:species])
    if !@pokeman
      @message = "Pokemon not found"
      end
  end



end
