console.log(10/2);
console.log(10/2.5);
console.log(10/0);//Infinity
console.log(10/0.0);//Infinity
console.log("sa"/0);//NaN
console.log(10/null);//Infinity
console.log(10/undefined);//NaN

let result=10+100+"sai"
console.log(result);//110sai

let result1="sai"+10+100
console.log(result1);//sai10100

let marks="5"+5
console.log(marks);//55

let marks1="5"-5
console.log(marks1);//0
//in javascript default true=1 and false=0
console.log(10/true);//10 
console.log(10/false);//Infinity

console.log("5"*5);//25
console.log("sai"*5);//NaN

let num1="50"
console.log(typeof num1);

let num2=50
console.log(typeof num2);
if(num1==num2){
    console.log("Matched");
    
}else{
    console.log("Not matched");
    
}//Matched

if(num1===num2){
    console.log("Matched");
    
}else{
    console.log("Not matched");
    
}//Not matched

console.log(16>10);
console.log(16<10);
console.log(16>=16);
console.log(16>10);
console.log(16>10 && 16>10);
console.log(16>10 && 16<10);
console.log(16>10 || 10>5);
console.log(!true);
console.log(!false);

let str1="This is JS"
let str2="JS"
let str3="This is JS"

if(str1.includes(str2)){
    console.log("pass");
    
}else{
    console.log("fail");
    
}


if(str1==str3){
    console.log("pass");
    
}else{
    console.log("fail");
    
}

let num3=10
num3=num3+5
console.log(num3);

num3+=5
console.log(num3);

num3*=5
console.log(num3);

num3/=5
console.log(num3);


