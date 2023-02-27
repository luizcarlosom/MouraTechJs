let mat = (valorA, valorB) => {
    const som = valorA + valorB ;
    const sub = valorA - valorB;
    const mult = valorA * valorB;
    const div = valorA / valorB;
    return [som, sub, mult, div]
}

console.log(mat(5,2));