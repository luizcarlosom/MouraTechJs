let luz = document.getElementById('luz');
let btn_on = document.querySelector('input#acender');
let btn_off = document.querySelector('input#apagar');

/*function acender(){
    luz.src = './img/pic_bulbon.gif';
}

function apagar(){
    luz.src = './img/pic_bulboff.gif';
}*/


function desligado(){
    btn_off.style.display = 'none';
    btn_on.style.display = 'block';
    luz.src = './img/pic_bulboff.gif'
}

function ligado(){
    btn_off.style.display = 'block';
    btn_on.style.display = 'none';
    luz.src = './img/pic_bulbon.gif';
}