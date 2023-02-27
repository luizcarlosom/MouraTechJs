function media_ponderada(Nota1, Nota2){
    
    let media = (((Nota1 * 4) + (Nota2 * 6)) / 10);

    if(media >= 90){
        return 'A';
    }else if(media >= 75 && media < 90){
        return 'B';
    }else if(media >= 60 && media < 75){
        return 'C';
    }else if(media >= 40 && media < 60){
        return 'D';
    }else if(media < 40 && media >= 0){
        return 'E';
    }else{
        return 'ERR0';
    }
}

console.log(media_ponderada(30,20));