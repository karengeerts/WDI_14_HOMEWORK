puts "What is your chosen max value?"
max_val = gets

random_number = rand(0..max_val.to_i)

puts "Guess a natural number between 0 and " + max_val
guess = gets

while guess.to_i != random_number
  if guess.to_i > random_number
  puts "Your guess is too high. Guess again."
  guess = gets
  else
  puts "Your guess is too low. Guess again."
  guess = gets
  end
end

puts "You guessed correctly."
