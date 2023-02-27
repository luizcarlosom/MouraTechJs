function mudar_email(alunos){
    return alunos.filter(end => end.email = end.email.replace('@discente.ifpe.edu.br', '@gmail.com'));
}
let teste = require('./alunos.json');
console.log(mudar_email(teste))