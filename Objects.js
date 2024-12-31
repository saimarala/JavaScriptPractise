let person={
    fname:"Test",
    lname:"pw",
    age:50,
    height:5.7
}

//Accessing object properties
console.log(person.age);
console.log(person["fname"]);

// add new property the existing object
person["weight"]=50
person.address="kotalam"
console.log(person["weight"]);

console.log(person.address);

console.log(person);

//update eixsting property
person.weight=65
console.log(person["weight"]);
console.log(person.weight);

//remove the property from the object
delete person.age;
console.log(person.age);//undefined

console.log("************looping object***********");
for(x in person){
    console.log(x  ," : ",person[x]);
    
}
