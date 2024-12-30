for(let x=0;x<10;x++){
    console.log(x);
    
}

for(let x=10;x>0;x--){
    console.log(x);
    
}

for(let x=10;x<100;x=x+3){
    console.log(x);
    
}

let arr=[12,20,30,"sai",true]
for(let x=0;x<arr.length;x++){
    console.log("Array values",arr[x]);
    
}

arr.forEach(ele=>{
    console.log("using for each",ele);
    
})

for(let val of arr){
    console.log("Using for of",val);//return the value
    
}

for(let val in arr){
    console.log("Using for in",val);//return the index
    console.log("Using for in",arr[val]);
    
}

let fname="Playwright Js"
for( x of fname){
    console.log(x);
    
}

let myObj={
    Name:"Sai",
    marks:50,
    status:false 

}
for(x in myObj){
   // console.log(x);
    console.log(x," : ",myObj[x]);
    
}
let sum=5
while (sum<15) {
    console.log("Welcome while");
    if(sum===10){
        break
    }
    sum++
   
}

for(let x=0;x<10;x++){
    if(x===4){
        continue
    }
console.log(x);

}
let y=100
do {
    console.log("while",y);
    
y++;
}while(y<15)
