function tabuada(number){
    let table = '';
    
    for(let i = 0; i <= 10; i++){
        table +=`${number} x ${i} = ${number * i}, `;
        
    };

    let substituiton = table.replace(`${number * 10},`, `${number * 10} `);

    if(number === 0){
        substituiton = table.replace(' 0 x 10 = 0,', ' 0 x 10 = 0');
    }

    return substituiton;
}

console.log(tabuada(0));