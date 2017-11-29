var name = prompt("What is your name?");

console.log("Hello and welcome, " +name + ", nice to see you.");

var menuChoice = prompt("Do you want to eat steak, fruit salad, tofurkey or pork chops tonight?");

if (menuChoice === "steak" || menuChoice === "pork chops"){
  console.log("Vegans beware!")
} else {
  console.log("This cuisine is vegan friendly.")
}
