// Assign two numeric variables a and b Initialise values as 5 and 10 

var a= 5
var b = 10
add = a+b
sub = b-a
mul = a*b
div = a/b
inc = ++a
dec = --b

console.log(add);
console.log(sub);
console.log(mul);
console.log(div);
console.log(inc);
console.log(dec);


//Javascript String Assign "Learning Javascript with AlmaBetter" to variable test and perform following
var test;
test = "Learning Javascript with AlmaBetter";
//Console log the length of string
console.log(test.length);

//Extract "AlmaBetter" from string using slice() and console log it
console.log(test.slice(25,35));

//Replace "Javascript" with "Web3.0" in test and console log it
console.log(test.replace("Javascript", "Web3.0"));

//Convert test to upper case using built in function and console log it
console.log(test.toUpperCase());

//Concat "Web3.0 is future" to test and console log it
var fut;
console.log(test.concat("Web3.0 is future"));
