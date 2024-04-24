// varible
let text = document.getElementsByClassName('text')[0];
let alertText = document.getElementsByClassName('alert')[0];
const el = document.querySelectorAll('span');
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

function darkLightMode() {
    document.querySelector('.container').style.backgroundColor = '#fff';
    document.querySelector('.total').style.backgroundColor = '#fff';
    document.querySelector('.cul').style.backgroundColor = '#fff';
}