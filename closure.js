function kitchen(){
    let rost =0;
    return function(){
        rost++;
        return rost;
    }
}
const firstServer = kitchen()
console.log(firstServer());
console.log(firstServer());
const firstServe = kitchen()
console.log(firstServe());
console.log(firstServe());
console.log(firstServer());
console.log(firstServe());



function stopWatch(){
    let counter = 0;
    return function(){
        counter++;
        return counter;
    }
}
