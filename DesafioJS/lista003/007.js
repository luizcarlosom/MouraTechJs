function estatistica_naturalidade(alunos){
    let array = [];
    let obj = {}
    let c = 0;
    let nac =  alunos.map((nacionality) => nacionality.naturalidade)
    
    for(const key in nac){
        if(array.indexOf(nac[key]) == -1){
            array[c] = nac[key];
            c++
        }
    };
    for(let i = 0; i < array.length;i++){
        let find_city = nac.filter(find => find == array[i])
        let tam = find_city.length
        obj[array[i]] = tam 
    }
    return obj
}
let teste = require('./alunos.json');
console.log(estatistica_naturalidade(teste))