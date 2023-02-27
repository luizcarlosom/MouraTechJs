function agrupamento(array){
    let interval_1 = 0;
    let interval_2 = 0;
    let interval_3 = 0;
    let interval_4 = 0;

    let del = [];

    array.forEach((list => {
        if(list >= 0 && list <= 25){
            interval_1 ++;
        }else if(list > 25 && list <= 50){
            interval_2 ++;
        }else if(list > 50 && list <= 75){
            interval_3++;
        }else if(list > 75 && list <= 100){
            interval_4++;
        }

    }))
    
    return [interval_1,interval_2,interval_3,interval_4];
}

console.log(agrupamento(array = [5,4,3,2,1,30,50,51,75, 76]))