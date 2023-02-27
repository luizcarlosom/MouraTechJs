const numeros = [8, 5, 2, 10, 15, 0, -2, 7];
console.log(JSON.stringify(numeros));

//ordenar um array
const numeros2 = [...numeros];
numeros2.sort((a, b) => b - a);
console.log(JSON.stringify(numeros2));

//Função map em um array
const numeros3 = numeros.map((v) => v * 2);
console.log(JSON.stringify(numeros3));

//Função reduce em um array
const numeros4 = numeros.reduce((S, V) => {
    return S += V;
}, 0);//O zero é o valor inicial do 'S'
console.log(JSON.stringify(numeros4));

//Função filter em um array
const numeros5 = numeros.filter((v) => v % 2 === 0);
console.log(JSON.stringify(numeros5));

