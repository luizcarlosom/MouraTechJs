//ORDENANDO ARRAY COMO SE FOSSE UM STRING
let numeros = [3,14,2,1];
numeros.sort();
console.log(numeros);
//ORDENANDO ARRAY
let numeros2 = [...numeros];
numeros2.sort((a,b) => a - b);
console.log(numeros2);
//FUNÇÃO MAP
let numeros3 = numeros2.map((m) => m*2);
console.log(numeros3);
//FUNÇÃO REDUCE
let numeros4 = numeros2.reduce((init, value) => init+=value, 0);//O zero é o valor do init e o value é valor de cada indice do array
console.log(numeros4);
//FUNÇÃO FILTER
let numeros5 = numeros2.filter((value) => value % 2 !== 0);
console.log(numeros5);
