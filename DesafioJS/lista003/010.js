function pesquisar_nome(find,alunos){
    return alunos.filter(pesq => pesq.nome.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').search(find.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')) != -1);
}
let teste = require('./alunos.json');
console.log(pesquisar_nome('se',teste));