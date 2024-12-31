console.log("***************************");
let x=10,y=20;
//Arthimetic operators + - * % ** ++ --
console.log("Arthimetic operators + - * % ** ++ --");

console.log(x+y);
console.log(y-x);
console.log(x*y);
console.log(y%x);//0
console.log(y/x);//2
console.log(5**2);//25

x++;//post increment operator
++x//pre increment
console.log(x);

y-- // post decrement
console.log(y);
--y //pre increment 
console.log(y);

// Assignment operators
console.log("Assignment operators = += -= *= /= %=");

x=100
y=50
x+=y
console.log(y);
console.log(x-=y);
console.log(x*=y);
console.log(x/=y);
console.log(x%=y);

//Relational/comparison operators
// always return a boolean value true/false

console.log("Relational/comparison operators < > <= >= !=");

x=10, y=20
console.log(x>y);//false
console.log(x<y);//true
console.log(x>=y);//false
console.log(x<=y);//true
console.log(x!=y);//true

//ternary operator ?
console.log("ternary operator ?");

console.log(x<y?x:y);// return x value 10
console.log(y>x?y:x);// return y value 20

//Logical operators

console.log("ogical operators && || !");
let a=true,b=false

console.log(a&&b);
console.log(a ||b );
console.log(!a );
