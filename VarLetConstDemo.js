var fname ="sai"// var can be re-declared and updated
var fname = "lo"
console.log(fname);

let lname ="playwright"// let can be updated but not re-declared
//let fname = "JS"//we can't re-declared 
lname="JS"// we can update
console.log(lname);

const toolName="Playwright" //we can't be re-declared and updated
console.log(toolName);

for(var i=0;i<5;i++){
console.log(i);

}
console.log("Oustside value is : "+i);// we can access outside the block

// for(let j=0;j<5;j++){
//     console.log(j);
    
//     }
//     console.log("Oustside value is : "+j);//we can't access outside the block

    // for(const k=0;k<5;k++){
    //     console.log(k);
        
    //     }
    //     console.log("Oustside value is : "+k);

    console.log("=========================");
    var a="hello JS"
    if(true){
       var a="hello Java"
       console.log(a);
       
    }
    console.log("outside if condition : "+a);

    let b="hello JS"
    if(true){
       let b="hello Java"
       console.log(b);
       
    }
    console.log("outside if condition : "+b);

    const c="hello JS"
    if(true){
       const c="hello Java"
       console.log(c);
       
    }
    console.log("outside if condition : "+c);
    
    

