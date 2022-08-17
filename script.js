const container = document.querySelector('.container');
const display = document.querySelector('.display')
let thrCanOnlyBeTwo = {}
let isMaster = false;

function add(){
    return thrCanOnlyBeTwo.master + thrCanOnlyBeTwo.apprentice
}

function subtract(){
    return thrCanOnlyBeTwo.master - thrCanOnlyBeTwo.apprentice
}

function multiply(){
    return thrCanOnlyBeTwo.master * thrCanOnlyBeTwo.apprentice
}

function divide(){
    return thrCanOnlyBeTwo.master / thrCanOnlyBeTwo.apprentice
}


function changeDisplay(event){
    if(display.innerText == '0' || isMaster){
        display.innerText = event
        isMaster = false;
    } else{
        display.innerText += event
    }

}

function storeMaster(symbol){
    thrCanOnlyBeTwo.math = symbol;
    if('master' in thrCanOnlyBeTwo){
        //isMaster = true; 
    } else {
        thrCanOnlyBeTwo.master = +display.innerText;
        isMaster = true; 
    }

}

function alter(event){
    if(event == 'clear'){
        display.innerText = 0;
        thrCanOnlyBeTwo = {};
    }
}

function equate(){
    thrCanOnlyBeTwo.apprentice = +display.innerText;
    console.log(thrCanOnlyBeTwo);

}

function compute(e){
    const choose = e.target.classList.value
    if(!choose.includes('btn')) return;

    if(choose.includes('num')){
        changeDisplay(e.target.innerText)
    } else if(choose.includes('math')){
        storeMaster(e.target.id)
    } else if(choose.includes('alter')){
        alter(e.target.id)
    } else if(choose.includes('equate')){
        equate()
    }

}

window.addEventListener('click',compute)
