var _ = require ('underscore');
var number = parseInt(process.argv[2]);

var array_to_check = _.range(1,number);
var result_array = array_to_check.filter(element => element % 3 == 0 || element % 5 ==0);
var sum = _.reduce(result_array, function(memo, num){ return memo + num; }, 0);
console.log(sum);
