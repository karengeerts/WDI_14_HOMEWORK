class StudentsController < ApplicationController

  def index
    @students = Student.all
  end

  def create
    StudentsHelper.create(params[:name],params[:img_url])
  end


end
