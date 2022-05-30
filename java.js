// Assign two numeric variables a and b Initialise values as 5 and 10 

var a;
a = 5;
var b;
b = 10;

var add;
add = a + b;
console.log(add);

var sub;
sub = b - a;
console.log(sub);

var mul;
mul = a * b;
console.log(mul);

var div;
div = a / b;
console.log(div);

var inc;
inc = ++a;
console.log(inc);

var dec;
dec = --b;
console.log(dec);

//Javascript String Assign "Learning Javascript with AlmaBetter" to variable test and perform following
var test;
test = "Learning Javascript with AlmaBetter";
//Console log the length of string
console.log(test.length);

//Extract "AlmaBetter" from string using slice() and console log it
const cake= test.slice(25);
console.log(cake);

//Replace "Javascript" with "Web3.0" in test and console log it
var word;
word = test.replace("Javascript", "Web3.0");
console.log(word);

//Convert test to upper case using built in function and console log it
var up;
up = test.toUpperCase();
console.log(up);

//Concat "Web3.0 is future" to test and console log it
var fut;
fut = test.concat("Web3.0 is future");
console.log(fut);

