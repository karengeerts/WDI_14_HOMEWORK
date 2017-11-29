//create the initial array

var days_of_the_week = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
console.log(days_of_the_week);

//make Sunday first day of the week
var lastDay = days_of_the_week.pop();
days_of_the_week.unshift(lastDay);
console.log(days_of_the_week);

//go back to initia array
var days_of_the_week = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
//create new array with new 2 sub arrays
var combinedArray = [days_of_the_week.slice(0,5), days_of_the_week.slice(5,7)];
//show the array
console.log(combinedArray);

//create an array with only week days
var weekdayArray = combinedArray[0];

console.log(weekdayArray);
//sort weekdays array alphabetically
var sortedArray = weekdayArray.sort();

console.log(sortedArray);
