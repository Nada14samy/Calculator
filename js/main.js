// varible
let text = document.getElementsByClassName('text')[0];
let alertText = document.getElementsByClassName('alert')[0];
console.log(alertText);
// console.log(document.getElementsByClassName('square')[0].textContent);
console.log(text.textContent.length);
const el = document.querySelectorAll('span');
console.log(el);

let Result = document.querySelector('.result');

function DeleteAll() {
    text.textContent = '';
    alertText.classList.add('hiden');
}
function DELOne() {
     text.textContent = text.textContent.slice(0, -1);
     alertText.classList.add('hiden');
}
function textElement(valueEl) {
    text.textContent += valueEl;
    if (text.textContent.length >= 13) {
        alertText.classList.remove('hiden');
        alertText.textContent = `يتعذر إدخال أكثر من 13 رقمًا`;
    }else{
        alertText.classList.add('hiden');
    }
}

function cal() {
    try {
        text.textContent = eval(text.textContent);
        alertText.classList.add('hiden');
    } catch {
        alertText.classList.remove('hiden');
        alertText.textContent = `تم إستخدام تنسيق غير صالح`;
    }
}
function result() {
    Result.textContent = eval(text.textContent);
}