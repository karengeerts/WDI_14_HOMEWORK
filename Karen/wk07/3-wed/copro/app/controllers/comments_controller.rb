class CommentsController < ApplicationController

  def create
    comment = Comment.new
    comment.body = params[:body]
    comment.project_id = params[:id]
    comment.user_id = session[:user_id]
    if comment.save
      redirect_to "/projects/#{comment.project_id}"
    else
      redirect_to "/login"
    end

  end

end
