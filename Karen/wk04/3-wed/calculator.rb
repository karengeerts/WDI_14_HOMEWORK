def calculator()
  while true
  puts "What operation do you want to perform? Press + or - or * or / or E (for exponents) or S (for square root)"
  operation = gets.chomp
  puts "What is the number you want to perform the operation on?"
  num1 = gets.chomp.to_i
  if operation !="S"
  puts "What is the other number you want to perform the operation on?"
  num2 = gets.chomp.to_i
  end

  output = num1+num2 if operation == "+"
  output = num1-num2 if operation == "-"
  output = num1*num2 if operation == "*"
  output = num1/num2 if operation == "/"
  output = num1**num2 if operation == "E"
  output = Math.sqrt(num1) if operation == "S"

  puts "The result is #{output}"

  puts "Do you want to perform another calculation? (y/n)?"
  continue = gets.chomp
  if continue != "y"
    break
  end
end
end

calculator()
