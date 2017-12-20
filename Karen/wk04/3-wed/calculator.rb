puts "What operation do you want to perform? Press + or - or * or / "
operation = gets.chomp
p operation

puts "What is the number you want to perform the operation on?"
num1 = gets.chomp.to_i
puts "What is the other number you want to perform the operation on?"
num2 = gets.chomp.to_i

p num1
p num2

output = num1+num2 if operation == "+"
output = num1-num2 if operation == "-"
output = num1*num2 if operation == "*"
output = num1/num2 if operation == "/"

puts "#{num1} #{operation} #{num2} equals #{output}"
