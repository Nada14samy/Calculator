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



// `<i class="fa-solid fa-moon" ></i>`
if (localStorage.length > 0) {
    document.querySelector('#mode').innerHTML = localStorage['lightMode'];
    document.querySelector('.container').style.backgroundColor = localStorage['bgColor'];
}

function LightMode(mode){
    let color;
    if (mode == `<i class="fas fa-sun"></i>`) {
        mode = `<i class="fa-solid fa-moon" ></i>`;
        document.querySelector('#mode').innerHTML = mode;
        localStorage.setItem('lightMode' , mode);
        color = '#fcfcfc';
        document.querySelector('.container').style.backgroundColor = color;
        localStorage.setItem('bgColor' , color);
    }else{
        mode = `<i class="fas fa-sun"></i>`;
        document.querySelector('#mode').innerHTML = mode;
        localStorage.setItem('lightMode' , mode);
        color = '#151434';
        document.querySelector('.container').style.backgroundColor = color;
        localStorage.setItem('bgColor' , color);
    }
}