let cars=["tes","sas","TATA"]

console.log(cars);
console.log(cars[2]);

//we can have variables of different types in the same array
let myarr=[100,"testing",12.6,true]

// we can have objects in the array

let person1={
    name:"sai",
    age:40
}

let person2={
    name:"sai",
    age:50
}

let myaar1=[person1,person2]

console.log(myaar1);
console.log(myaar1[0]);

let fruits=["Banana","Orange","Apple","Mango"]

console.log(fruits.length);//4

for( i=0;i<fruits.length;i++){
console.log(fruits[i]);

}

for(fruit of fruits){
    console.log(fruit);
    
}

fruits.forEach(s=>{
    console.log(s);
})
console.log(Array.isArray(fruits));
