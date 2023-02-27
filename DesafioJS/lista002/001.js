function estatistica(array){
    let bigger = 0;//maior
    let smaller = 1000;//menor
    let soma = 0;//somando os números
    let c = 0;//contador

    array.forEach(list => {
        
        if(list > bigger){
            bigger = list;
        }//verificando o maior

        if(list < smaller){
            smaller = list;
        }//verificando o menor

        soma += list;
        c++

    });

    return array = [bigger, smaller, soma/c];
}

console.log(estatistica(array = [1, 2, 3, 4]));