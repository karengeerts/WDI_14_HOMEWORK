var inputarray = process.argv;
var removed = inputarray.splice(0,2);

var total = 0;
for (var number of inputarray){
  total += Number(number);
}

console.log(total);
