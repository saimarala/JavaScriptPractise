if(10<20){
    console.log("I am inside if block");
    
}else{
    console.log("I am inside else block");
    
}

let browerName="Chrome"
if(browerName.toLowerCase().includes("chrome")){
console.log("Chrome Started");

}else if(browerName.toLowerCase().includes("firefox")){
    console.log("firefox Started");
}else if(browerName.toLowerCase().includes("edge")){
    console.log("edge Started");
}else{
    console.log("This tool only support FF,chrome and edge browsers");
    
}

switch(new Date().getDay){
    case 0:
        console.log("Sunday");
        break;
    case 1:
            console.log("Monday");
            break;  
     case 2:
                console.log("Tueday");
                break;             
     default:
        console.log("Sorry");
        break
           
}