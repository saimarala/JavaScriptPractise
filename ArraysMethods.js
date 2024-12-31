let fruits=["Banana","Orange","Apple","Mango"]

console.log(fruits.toString());//Banana,Orange,Apple,Mango
console.log(fruits.join("*"));//Banana*Orange*Apple*Mango

//pop - remove the last element and 
fruits=["Banana","Orange","Apple","Mango"]
console.log(fruits.pop());// print the removed element Mango
console.log(fruits)//[ 'Banana', 'Orange', 'Apple' ]

//push - add the element at end of the array
fruits=["Banana","Orange","Apple","Mango"]
console.log(fruits.push("Kiwi"));// add and return the size of the array

console.log(fruits);

//shift()- remove the first element and shift the othe elements to lower index
fruits=["Banana","Orange","Apple","Mango"]
console.log(fruits.shift());//Banana
console.log(fruits);//[ 'Orange', 'Apple', 'Mango' ]

//unshift()- add element  the first element and shift the othe elements to higher index
fruits=["Banana","Orange","Apple","Mango"]
console.log(fruits.unshift("lemon"));//5
console.log(fruits);//[ 'lemon', 'Banana', 'Orange', 'Apple', 'Mango' ]

//Delete elements from array
fruits=["Banana","Orange","Apple","Mango"]
delete fruits[1]
console.log(fruits);//[ 'Banana', <1 empty item>, 'Apple', 'Mango' ]

//conact - joining/merging 2 or more arrays
let arr1=[10,20]
let arr2=["A","B","C"]
console.log(arr1.concat(arr2));//[ 10, 20, 'A', 'B', 'C' ]

let arr3=["X","Y","Z"]

console.log(arr1.concat(arr2,arr3));//[    10,  20,  'A', 'B',    'C', 'X', 'Y', 'Z'  ]

//slice() - extracting elements from array
fruits=["Banana","Orange","Apple","Mango"]
console.log(fruits.slice(1));//[ 'Orange', 'Apple', 'Mango' ]
console.log(fruits.slice(2));//[ 'Apple', 'Mango' ]

//sort() 
fruits=["Banana","Orange","Lemon","Apple","Mango"]
console.log(fruits.sort());//[ 'Apple', 'Banana', 'Lemon', 'Mango', 'Orange' ]

let nums=[100.50,70,200,10]
console.log(nums.sort());//[ 10, 100.5, 200, 70 ]

//reverse()
fruits=["Banana","Orange","Lemon","Apple","Mango"]
console.log(fruits.reverse());//[ 'Mango', 'Apple', 'Lemon', 'Orange', 'Banana' ] 

