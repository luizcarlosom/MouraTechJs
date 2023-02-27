function semestres_entrada(alunos){
    let array_matriculas = [];
    let array_obj_sem = [];
    let array_obj_qnt = {};
    let c = 0;
    let cont = 0;

    let matriculas = alunos.map(sem => sem.matricula.replace(sem.matricula.substring(0,5),sem.matricula.substring(0,4)+'.'+sem.matricula.substring(4,5)).substring(0,6))
    
    matriculas.forEach((verificando,i) => {
        if(array_matriculas.indexOf(verificando) == -1){
            array_matriculas[c] = verificando;
            array_obj_sem[c] = {semestre:verificando};
            c++
        }    
    });

    for(let i = 0; i < matriculas.length;i++){
        if(array_obj_qnt[matriculas[i]] === undefined){
            array_obj_qnt[matriculas[i]] = 1;
        }else{
            array_obj_qnt[matriculas[i]]++;
        }
    };

    for(const j in array_obj_qnt){
        array_obj_sem[cont].quantidade = array_obj_qnt[j];
        array_obj_sem[cont].percentual = String(((array_obj_qnt[j]*100)/(alunos.length)).toFixed(2) + ' %')
        cont++
    }
    return array_obj_sem.sort((a,b) => a.semestre - b.semestre)
}

let teste = require('./alunos.json');
console.log(semestres_entrada(teste));