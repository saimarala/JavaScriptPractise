class Test{
    static a=10;// static variable
    b=20//Non-static variable

    static m1(){
        console.log("This is m1 static method.....");        
    }
    m2(){
        console.log("This is m2 Non-static method.....");        
    }
}

//1)we can directly access the static variables nad methods using class name

console.log(Test.a);//10
Test.a=1000
console.log(Test.a);//1000
//console.log(Test.b);//undefined

Test.m1()//static 
//Test.m2()//error incorrect

//2) we can access non static variables & methods using object
let t=new Test();
console.log(t.b);
t.m2()

