function ordenar_nascimento(alunos){
    for(let i=0;i<alunos.length;i++){
        const year = alunos[i].nascimento.split('/')[2];
        const month = alunos[i].nascimento.split('/')[1];
        const day = alunos[i].nascimento.split('/')[0];
        alunos[i].nascimento = new Date(`${year}-${month}-${day}`);
    }
    alunos.sort((a,b)=> a.nascimento-b.nascimento)
    for(let j=0;j<alunos.length;j++){
        let year = String(alunos[j].nascimento).split(' ')[3];
        let month = String(alunos[j].nascimento).split(' ')[1];
        let day = String(alunos[j].nascimento).split(' ')[2];
        switch (month){
            case 'Jan':
                month = '01';
                break;
            case 'Feb':
                month = '02';
                break;
            case 'Mar':
                month = '03';
                break;
            case 'Apr':
                month = '04';
                break;
            case 'May':
                month = '05';
                break;
            case 'Jun':
                month = '06';
                break;
            case 'Jul':
                month = '07';
                break;
            case 'Aug':
                month = '08';
                break;
            case 'Sep':
                month = '09';
                break;
            case 'Oct':
                month = '10';
                break;
            case 'Nov':
                month = '11';
                break;
            case 'Dec':
                month = '12';
                break
            default:
                break 
        }
        alunos[j].nascimento = `${day}/${month}/${year}`;
    }
    return alunos
}

let teste = require('./alunos.json');
console.log(ordenar_nascimento(teste))