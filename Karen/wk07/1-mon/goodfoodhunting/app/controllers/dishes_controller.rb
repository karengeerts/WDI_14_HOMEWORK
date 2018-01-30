class DishesController < ApplicationController

  def new
  end

  def index
    @dishes = Dish.all
  end

  def show
    @dish = Dish.find_by(id:params[:id])
    if !@dish
      @message = "Dish not found"
      end
  end

  def create
    dish = Dish.new
    dish.title = params[:title]
    if dish.save
      redirect_to '/'
    else
      render :new
    end
  end

  def destroy
    dish = Dish.find_by(id:params[:id])
    if dish.destroy
      redirect_to '/dishes'
    else
      render :show
    end
  end

  def edit
		dish = Dish.find_by(id: params[:id])
		dish.title = params[:edit]
		dish.save
		redirect_to '/dishes'
	end

end
