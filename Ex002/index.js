

//ARROW FUNCTIONS
let soma = (n1, n2) => n1 + n2;
let subtracao = (n1, n2) => n1 - n2;
let matematica = (fn, n1, n2) => fn(n1, n2);

let hora = () => {
    console.log(date.getHours());
}

//PRINT FUNCTIONS
console.log(matematica(subtracao, 5, 3));
console.log(matematica(soma, 5, 3));

//CHANGING BASE
console.log((10).toString(2));

let date = new Date();

//WHICH HOURS
hora();

//WHICH THE DAYS
let welcome = () => {
    switch(date.getDay()){
        case 6:
            console.log('Hoje é sábado!');
            break
        case 5:
            console.log('Hoje é sexta!');
            break
        case 4:
            console.log('Hoje é quinta!');
            break
        case 3:
            console.log('Hoje é quarta!');
            break
        case 2:
            console.log('Hoje é terça!');
            break
        case 1:
            console.log('Hoje é segunda!');
            break
        case 0:
            console.log('Hoje é domingo!');
            break
        default:
            console.log('ERR0');
            break
    }
}

welcome();

