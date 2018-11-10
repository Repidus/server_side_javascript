var _ = require('underscore');
var arr = [3, 2, 4, 6, 7];

console.log(arr[0]);
console.log(_.first(arr));
console.log(arr[arr.length-1]);
console.log(_.last(arr));