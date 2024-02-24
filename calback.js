function greeting(greetingHandler, name){
    greetingHandler(name);

}

function greetingHandler(name){
    console.log('Good Morning', name)
}

function greetingHandlerNight(name){
    console.log('Good Night',name)
}

greeting(greetingHandler,'Juyel');
greeting(greetingHandler,'Rimon');
greeting(greetingHandler,'kamrul');
greeting(greetingHandler,'Humayun');

greeting(greetingHandlerNight,'Juyel');
greeting(greetingHandlerNight,'Rimon');
greeting(greetingHandlerNight,'kamrul');
greeting(greetingHandlerNight,'Humayun');