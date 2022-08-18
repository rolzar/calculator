const container = document.querySelector('.container');
const display = document.querySelector('.display')
let thrCanOnlyBeTwo = {}
let isApprentice = false;


function add(){
    let addition = thrCanOnlyBeTwo.master + thrCanOnlyBeTwo.apprentice;
    theReplacement(addition);
    
    return display.innerText = addition
}

function subtract(){
    let sub = thrCanOnlyBeTwo.master - thrCanOnlyBeTwo.apprentice
    theReplacement(sub);

    return display.innerText = sub
}

function multiply(){
    let multi = thrCanOnlyBeTwo.master * thrCanOnlyBeTwo.apprentice;
    theReplacement(multi);

    return display.innerText = multi
}

function divide(){
    let div = thrCanOnlyBeTwo.master / thrCanOnlyBeTwo.apprentice;
    theReplacement(div);

    return display.innerText = div
}

function remainder(){
    let rem = thrCanOnlyBeTwo.master % thrCanOnlyBeTwo.apprentice;
    theReplacement(rem);

    return display.innerText = rem
}


function theReplacement(after){
    thrCanOnlyBeTwo.master = after; 
    delete thrCanOnlyBeTwo.apprentice
    delete thrCanOnlyBeTwo.math
    isApprentice = true

}

function changeDisplay(event){
    if(display.innerText == '0' || isApprentice){
        display.innerText = event
        isApprentice = false;
    } else{
        display.innerText += event
    }

}

function storeMaster(symbol){
    thrCanOnlyBeTwo.math = symbol;
    if('master' in thrCanOnlyBeTwo){
        isApprentice = true; 
    } else {
        thrCanOnlyBeTwo.master = +display.innerText;
        isApprentice = true; 
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
        if('math' in thrCanOnlyBeTwo){
            equate()
            storeMaster(e.target.id)
        } else {
            storeMaster(e.target.id)
        }
        
    } else if(choose.includes('alter')){
        alter(e.target.id)
    } else if(choose.includes('equate')){
        equate()
    }

}

window.addEventListener('click',calculator)
