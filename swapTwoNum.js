// // Using a third variable
// var a = 9;
// var b = 10;
// console.log(a, b);

// var c = b;
// b = a;
// a = c;

// console.log(a, b);



// Without Using a third variable
var a = 9;
var b = 10;
console.log(a, b);

a = a + b;
b = a - b;
a = a - b;

console.log(a, b);