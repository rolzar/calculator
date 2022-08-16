const container = document.querySelector('.container');
const display = document.querySelector('.display')

function add(a,b){
    return a + b
}

function subtract(a,b){
    return a - b
}

function multiply(a,b){
    return a * b
}

function divide(a,b){
    return a / b
}

function thrCanOnlyBeTwo(){

}


function compute(e){
    const choose = e.target.classList.value
    if(!choose.includes('btn')) return;
    console.log(choose);

    if(choose.includes('num')){
        if(display.innerText == '0'){
            display.innerText = e.target.innerText
        } else{
            display.innerText += e.target.innerText
        }
        
    }


}

window.addEventListener('click',compute)
