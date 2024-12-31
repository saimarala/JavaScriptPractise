function student(){
    this.name="sai"
    this.gender="male"
}
student.prototype.age=40
stu1=new student();
console.log(stu1.name,stu1.gender);
//stu1.age=40
console.log(stu1.name,stu1.gender,stu1.age);

stu2=new student();
console.log(stu2.name,stu2.gender,stu2.age);

