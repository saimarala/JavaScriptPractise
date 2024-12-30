let arr=[1,2,3,"sai",true,10.50]
console.log(arr);
console.log(typeof arr);
console.log(arr[1]);
//console.log(arr[100]);//undefined
console.log(typeof arr[4]);
console.log(arr.length);
console.log(arr[arr.length-2]);

 console.log(arr.push(20));//add element in to array
 console.log(arr);
arr.unshift("Alert")//add the begining
console.log(arr);
arr.pop()//remove the last vaules in the array
console.log(arr);

arr.shift()//remove the first value in the array
console.log(arr);

arr.splice(1,2)// start value and total values need to delete
console.log(arr);

console.log("==================================");

let arr1=[1,2,3,"sai",true,10.50]
let arr2=["Java","JavaScript","Pyton"]
arr1.push(arr2)
console.log(arr1);
console.log(arr1[6][1]);//JavaScript
//object
let obj1={
    name:"Java",
    language:"JS"
}

arr1.push(obj1)
console.log(arr1);
console.log(arr1[7].name);//Java
console.log(arr1[7]["name"]);//Java

console.log("=========================");
let arr4=[1,2,3,"sai",true,10.50]

for(let i=0;i<arr4.length;i++){
    console.log(arr4[i]);
    
}


for(let v of arr1){
    console.log(v);
    
}


