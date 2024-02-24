// primitive type 
let numb1 = 4;
let num2 = 5;
function multiply(a,b){
    a=20
    const result = a*b;
    return result;
}
const output = multiply(numb1,num2);
console.log(output);


// non-primitive Type
let student1= {name:'Juyel', Department:'CST'}
let student2= {name:'Rimon', Department:'CST'}
function makeWebsite(person, person1){
    person.name ='Humayun' 
    person1.name ='kamrul' 

}
console.log(student1,student2);
makeWebsite(student1,student2);
console.log(student1,student2);
