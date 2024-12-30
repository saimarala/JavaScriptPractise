let obj1={}
console.log(typeof obj1);

let obj2={
    "Name":"Autmation",
    "Address":"Kotalam",
    "Number":123456789 ,
    status :"false"   
}
console.log(typeof obj2);
console.log(obj2);
console.log(obj2.Address);
console.log(obj2.status);
console.log(obj2["Address"]);
console.log(obj2.Salaray);//undefined
obj2.Salaray=100
obj2.exp=12
console.log(obj2);

delete obj2.Salaray
console.log(obj2);
console.log("=====================");
let obj3={
    "State":"AP",
    "Country":"India"
}

obj2.fullAddress=obj3
console.log(obj2);

obj2.Family=["M1","M2"]
console.log(obj2);

console.log(obj2.fullAddress.Country);//India
console.log(obj2.Family[1]);//M2

console.log("================");
obj2.fun=function() {
    console.log("Hello from function");
    
}
console.log(obj2);// fun: [Function (anonymous)]
obj2.fun();//Hello from function

console.log("===================");

let sai=obj2
console.log(typeof sai);
console.log(sai);

delete sai.fullAddress
console.log(sai);//same output
console.log(obj2);//same output

obj2.lang="playwright"
console.log(sai);//same output
console.log(obj2);//same output


