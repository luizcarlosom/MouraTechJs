const aluno = {};

aluno.nome = 'Luiz Carlos';
aluno.sobrenome = 'Maciel';
aluno.idade = 19;
aluno.sexo = 'masc';

for(const key in aluno){
    const valor = aluno[key];
    console.log(`${key}: ${valor}`);
};

const aluno1 = new Object();

aluno1.nome = 'Carlos';
aluno1.sobrenome = 'Maciel';
aluno1.idade = 39;
aluno1.sexo = 'masc';

const alunos = [];

alunos.push(aluno);
alunos.push(aluno1);

for(const aluno of alunos){
    console.log(aluno);
}
