function hello(){
console.log("JS");

}
hello();//JS
console.log(hello());//JS undefined

function showName(fname,lname) {
    return fname+" "+lname
    
}

let val=showName("Java","JS")
console.log(val);//Java JS

console.log(showName("Plwaywright","test"));//Plwaywright test
console.log(typeof showName);//function
//function expression
let myfunc1=function f1() {
    console.log("I am in f1");
    return 30
    
}
let result=myfunc1()
console.log(result);
console.log(typeof myfunc1);//function
//anonymous function expression
let myfunc2=function(n1,n2,n3) {
    console.log("I am in f2");
    return n1+n2+n3
    
}

console.log(myfunc2(10,20,30));

//add function in to objet

let myObj={
    "Name":"Playwright",
    f3:function name(){
        console.log("Iam inside object");
        
    }
}
myObj.f3()

//have array inside function
let arr=[
    12,"sai",function() {
        console.log("I am inside array");
        
    }
]
//arr[2]()//I am inside array
let y=arr[2]
y()//I am inside array
//arrow function
let z=(x1,x2) =>{
    console.log("hello JS again");
    return x1+x2
    
}
console.log(z(10,20));

let myAdress=()=>console.log("AP");
myAdress()

let myNewAddress=(house,street)=>console.log(`${house} ${street} AP`);
myNewAddress("sai","test")

