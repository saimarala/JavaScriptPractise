let fname="This is automation testing "
console.log(typeof fname);
console.log(fname.length);
console.log(fname[1]);
console.log(fname.includes("automation"));
console.log(fname.includes("Automation"));
console.log(fname.startsWith("This"));
console.log(fname.endsWith("testing"));
console.log(fname.split(" "));

let arr=fname.split(" ")
console.log(arr[2]);

console.log(fname.toUpperCase());
console.log(fname.toLowerCase());
console.log(fname.trim());
console.log(fname.replace("testing","world"));

console.log(fname);

let finalMsg="Total price is 200 USD"
let value=finalMsg.split(" ")[3]
console.log(typeof value);
let price=parseInt(value)
console.log(typeof price)
console.log(price);

if(price==200){
    console.log("pass");
    
}else{
  console.log("fail") 
    
}

let msg='Final \tamount is \'300\' \nUSD'
console.log(msg);

let newMsg=`Final amount is '400' USD`

// let newMsg=`Final amount is "400" USD`
// console.log(newMsg);

let y=500
let finalMsg1=`Final amount is ${y} USD`
console.log(finalMsg1);



// let lname=new String("Automation")
// console.log(typeof lname);
