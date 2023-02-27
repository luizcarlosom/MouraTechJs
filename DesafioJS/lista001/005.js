function ordenar_3_numeros(a, b, c){
    let array = [a, b ,c];
    let order_decres = (a, b) => b - a;

    return array.sort(order_decres);
}

console.log(ordenar_3_numeros(12,6,16))