function email(alunos){
    return alunos.map(a => a.email).join(';')
}

const teste = require('./alunos.json');

console.log(email(teste));

/* function email(alunos){
    let list = '';
    const email = alunos.filter(select => {
        if(select.email){
            list+=select.email+';';
        }
    });
    let str = list;
    str = str.substring(0, str.length -1)

    return str
} */

