class Student{

    // setDetails(){
    //     this.sid=101
    //     this.sname="JS"
    //     this.grade="A"
    // }

    constructor(sid,sname,grade){
        this.sid=sid
        this.sname=sname
        this.grade=grade
    }

    display(){
        console.log(this.sid,this.sname,this.grade);
        
    }
}

let stu1=new Student(1,"test","A");
let stu2=new Student(2,"test","B");
let stu3=new Student(3,"test","C");

//stu.setDetails()
stu1.display()
stu2.display()
stu3.display()