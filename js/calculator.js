
let display = document.getElementsByClassName('display')[0];
let miniContainer = document.getElementsByClassName('mini-container')[0];
let theBtn = document.getElementsByClassName('btn');

for(let i = 0; i < theBtn.length; i++){
    let theClickItem = theBtn[i].addEventListener('click', displayFn);
}

function displayFn(e){
if(e.target.innerText == "AC"){
    display.innerText = "";
}else if(e.target.innerText == "DEL"){
    display.innerText = display.innerText.slice(0,-1);
}else if(e.target.innerText == "="){
    try {
        if(display.innerText.indexOf("%") != -1){
            display.innerText = display.innerText.slice(0, -1)/ 100;
        }else{
            display.innerText = eval(display.innerText);
        }
    } catch {
        display.innerText = "Invalid!";
    }
}else{
    display.innerText += e.target.innerText;
}
}