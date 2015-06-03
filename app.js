var foo = require('./var.js');
var people = [{name:'A', age: 20}, {name:'B', age: 30}, {}, {name:'', age: 10}];

console.log(foo.removeBadPeople(people));
console.log(foo.sumAgesAll(people));
console.log(foo.sumAgesValid(people));
