days_of_the_week = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday']

alt_start_day = days_of_the_week.pop
days_of_the_week.unshift(alt_start_day)

puts "question 2:" + days_of_the_week.to_s

days_of_the_week = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday']

new_array = [days_of_the_week.slice(0,5), days_of_the_week.slice(5,2)]
puts "question 3:" + new_array.to_s
newer_array = new_array.drop(1)
puts "question 4:" + newer_array.to_s
last_array = newer_array.sort
puts "question5" + last_array.sort.to_s
