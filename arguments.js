function sum(a,b,c){
    console.log(typeof arguments);
    const result= a+b+c;
    return result;
}

const total = sum(45,67,89,23,34,54,65,1332);
console.log(total);