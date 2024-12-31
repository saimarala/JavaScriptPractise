let employee={
    empName:"JS",
    empid:12,
    job:"Tester",
    basical:5000,
    bonus:function(){
        return ((this.basical*10)/100)
    }
}

console.log(employee.empName);
console.log(employee.bonus());