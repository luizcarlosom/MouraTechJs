function aniversariantes(mes, alunos){
    
    return alunos.filter((temp) => {
        return temp.nascimento.split('/')[1] == String(mes).padStart(2,'0')
    }).map((dates) => {
        return {data: dates.nascimento.substring(0,5), nome: dates.nome}
    }).sort((a,b) => {
        return a.data.split('/')[0] - b.data.split('/')[0]
    })

}

const teste = require('./alunos.json')

console.log(aniversariantes(2,teste))