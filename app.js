var peeps = require('./var.js');
var mathStuff = require('./maths.js');
var people = [{name:'A', age: 20}, {name:'B', age: 30}, {}, {name:'', age: 10}];
var arr = [1,3,4,5,6,20,54,34,23];
console.log(peeps.removeBadPeople(people));
console.log(peeps.sumAgesAll(people));
console.log(peeps.sumAgesValid(people));
console.log('the fib seq for 50 is ' + mathStuff.fibonacci(50));
console.log('the largest number in ' + arr + ' is '+mathStuff.calculate.largest(arr));
console.log('the average of ' + arr + ' is ' +mathStuff.calculate.average(arr));
console.log('the median of ' + arr + ' is ' + mathStuff.calculate.median(arr));

