const container = document.querySelector('.container');
const display = document.querySelector('.display')
let thrCanOnlyBeTwo = {}
let isMaster = false;


function add(){
    return display.innerText = thrCanOnlyBeTwo.master + thrCanOnlyBeTwo.apprentice
}

function subtract(){
    return display.innerText = thrCanOnlyBeTwo.master - thrCanOnlyBeTwo.apprentice
}

function multiply(){
    return display.innerText = thrCanOnlyBeTwo.master * thrCanOnlyBeTwo.apprentice
}

function divide(){
    return display.innerText = thrCanOnlyBeTwo.master / thrCanOnlyBeTwo.apprentice
}

function remainder(){
    return display.innerText = thrCanOnlyBeTwo.master % thrCanOnlyBeTwo.apprentice
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
    } else if(event == 'sign'){
        if(display.innerText[0] == '-'){
            display.innerText = Math.abs(display.innerText)
        } else {
            display.innerText = '-'+display.innerText
        }
    } else if(event == 'decimal'){
        if(display.innerText.includes('.')){
            alert("Can't add anymore decimals")
        } else {
            display.innerText = display.innerText + '.'
        }
    } else {       
        storeMaster('remainder')
    }
}

function equate(){
    thrCanOnlyBeTwo.apprentice = +display.innerText;
    
    if(thrCanOnlyBeTwo.math == 'add'){
        add();
    } else if(thrCanOnlyBeTwo.math == 'sub'){
        subtract();
    } else if(thrCanOnlyBeTwo.math == 'multiply'){
        multiply();
    } else if(thrCanOnlyBeTwo.math == 'division'){
        if(thrCanOnlyBeTwo.apprentice == 0){
            alert("Oops! Can't divide by zero.");
            alter('clear');
            return
        }
        divide();
    } else if(thrCanOnlyBeTwo.math == 'remainder'){
        remainder();
    }


}

function calculator(e){
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

window.addEventListener('click',calculator)
