
puts "Please provide the file name and extension"
file_name = gets

count = File.open(file_name.chomp).readlines.length

puts count.to_s + " line(s)"
