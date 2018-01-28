class StudentsHelper

  def self.sort
    random_house = rand(0...House.count)
    houses = House.all.to_a
    houses[random_house]
  end

  def self.create(name, img_url)
    student = Student.new
    student.name = name
    student.img_url = img_url
    student.house = sort
    raise "Student could not be created" unless student.save
    student
  end


end
