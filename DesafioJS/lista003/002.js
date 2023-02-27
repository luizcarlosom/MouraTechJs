function filtro_naturalidade(naturalidade, alunos){
    const array = [];
    let c = 0;
    let filter = alunos.filter((select) => {
        if(select.naturalidade == naturalidade){
            array[c] = select;c++
        }
    });
    
    return array
}

let teste = require('./alunos.json');
console.log(filtro_naturalidade(teste))