const textarea = document.getElementById('text1');

const letter = document.getElementById('letter');
const words = document.getElementById('words');
const sentence = document.getElementById('sentence');


textarea.addEventListener("input", cal);


function cal(e){
    getLetter();
    getWords();
    getSentence();
}
function getLetter(){
    let text = textarea.value;
    let cal = 0;
    for(let i= 0; i < text.length; i++){
        if(text[i].search(/[a-z]/ig) == 0){
            cal++;
        }
    }
    letter.innerHTML = cal;
}
function getWords(){
    let text = textarea.value;
    let cal = 0;
    let arr_ = text.split(' ');

    for(let i= 0; i < arr_.length; i++){
        if(arr_[i].search(/[a-z]/ig) != -1){
            cal++;
        }
    }
    words.innerHTML = cal;
}
function getSentence(){
    let text = textarea.value;
    let cal = 0;
    let arr_ = text.split('.');
    
    for(let i= 0; i < arr_.length; i++){
        if(arr_[i].search(/[a-z]/ig) != -1){
            cal++;
        }
    }
    sentence.innerHTML = cal;
}

function newColor(){
    document.body.style.background = `rgb(
        ${Math.random()*255},
        ${Math.random()*255},
        ${Math.random()*255}    
    )`
}
