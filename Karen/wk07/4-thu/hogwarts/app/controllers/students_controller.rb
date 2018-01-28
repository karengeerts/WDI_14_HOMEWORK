class StudentsController < ApplicationController

  def index
    @students = Student.all
  end

  def sort
    random_number = rand(5..8)
    @house = House.find(id:random_number)
  end

  def create
    student = Student.new
    student.name = params[:name]
    student.img_url = params[:img_url]
    student.house = sort
    if student.save
  end

end
