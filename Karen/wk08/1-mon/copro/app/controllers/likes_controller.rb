class LikesController < ApplicationController
  def create
    like = Like.new
    like.user_id = session[:user_id]
    like.project_id = params[:project_id]
    if like.save
      redirect_to "/projects/#{like.project_id}"
    end
  end

end
