class Phone

  def initialize(string)
    @number = string
  end

  def number
    @number = @number.to_s.gsub(/\D/,'')
    if @number.length == 10
      @number
    elsif @number.length == 11 && @number[0] == "1"
      @number.slice! @number[0]
      @number
    else
      @number = "0000000000"
    end
  end

  def area_code
    @number.split('').take(3).join
  end

  def to_s
    number_array = @number.split('')
    area_code = number_array[0..2].join
    office_code = number_array[3..5].join
    desk_code = number_array[6..9].join
    number = "(" + area_code + ") " + office_code + "-" + desk_code
  end
end
