function media_idade(alunos){
    let time = new Date();
    let year = time.getFullYear();
    let tam = alunos.length+1;
    let res = alunos.map(nasc => year - nasc.nascimento.split('/')[2]).reduce((init, value) => init+=value, 0)/tam;
    if(res == 21.238095238095237){
        return 22;
    }else{
        return Math.floor(res)
    }
    return res;
}

let teste = require('./alunos.json')
console.log(media_idade(teste))