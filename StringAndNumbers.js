let s="Welcome";
//let s=new String("sss")

//charAt()
console.log(s.charAt(1));

//concat()
console.log(s.concat(" to JavaScript"));//Welcome to JavaScript
console.log(s.concat(" to JavaScript").concat(" for playwright"));//Welcome to JavaScript for playwright

//replcae()
s="Welcome to JavaScript"
console.log(s.replace("JavaScript","Java"));

//substring()
s="Welcome to JavaScript"
console.log(s.substring(0,7));//Welcome

//toLowerCase() & toUpperCase()
s="Welcome to JavaScript"
console.log(s.toLowerCase());
console.log(s.toUpperCase());

//split()
s="Welcome to JavaScript"
let arr=s.split(" ")
console.log(arr);//[ 'Welcome', 'to', 'JavaScript' ]

//trim()
s=" Welcome to JavaScript         "
console.log(s.trim());//Welcome to JavaScript

//Numbers
//let x=100
//let x =new Number("100")

let x=100// Integer value
let y=100.7//decimal
let z=10e2//exponenical value
console.log(x,y,z);//100 100.7 1000

// isInteger()
x=10
y=1.8
z="x"
console.log(Number.isInteger(x));//true
console.log(Number.isInteger(y));//false
console.log(Number.isInteger(z));//false

//parseInt() - converts a string in to number
s="12345"
console.log(typeof s);//string
console.log(typeof Number.parseInt(s));//number

//parseFloat()
s="123.46"
console.log(typeof s);//string
console.log(typeof Number.parseFloat(s));//number

//toString
let n=1234
console.log(typeof n);//number
console.log(typeof Number.toString(s));//string
