function sexo(alunos){
    let quant_man = 0;
    let quant_woman = 0;
    let all = alunos.length;
    let man = alunos.filter((boy) => {
        if(boy.sexo !== 'Feminino'){
            quant_man+=1
        }
    });
    let woman = alunos.filter((girl) => {
        if(girl.sexo !== 'Masculino'){
            quant_woman+=1
        }
    });

    return [all, quant_man, quant_woman]
}

console.log(sexo());