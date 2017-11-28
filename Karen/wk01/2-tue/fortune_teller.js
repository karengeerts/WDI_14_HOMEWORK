var numChildren = 4;
var partnerName = "Howard";
var city = "Dallas, Texas";
var jobTitle = "professional poker player";

console.log("You will be a " + jobTitle + " in " + city + ", and married to " + partnerName + " with " + numChildren + " kids.")

var d = new Date ();
var year = d.getFullYear();

var birthYear = prompt("What year were you born in?");

var possibleAge1 = year - birthYear;
var possibleAge2 = possibleAge1 - 1;

console.log("You are either " + possibleAge1 + " or " + possibleAge2);

var maxAge = 90;
var dailyAmount = 2;
var snacksAmount = (maxAge-possibleAge1)*365*dailyAmount;

console.log("You will need " + snacksAmount + " apples to last you until the ripe old age of " + maxAge);
