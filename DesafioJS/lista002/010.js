function febre(array){
    let temperature = [];//temperatura
    let c = 0;//contador
    let sickness = [];//doenças
    
    array.forEach(temperatures => {
        
        temperature[c] = temperatures;

        if(temperature[c] >= 41){
            sickness[c] = 'Hipertermia';
        }else if(temperature[c] >= 39.6){
            sickness[c] = 'Febre Alta';
        }else if(temperature[c] >= 37.8){
            sickness[c] = 'Febre';
        }else if(temperature[c] >= 35.1){
            sickness[c] = 'Normal'
        }else{
            sickness[c] = 'Hipotermia'
        }
        
        c++

    })  
    return sickness;
}

console.log(febre(array = [35.41, 35.12, 36.06, 36.9, 39.22, 31, 49, 40, 36, 50]))