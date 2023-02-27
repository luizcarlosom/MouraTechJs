function pa(ini, raz, qnt){
    let sent = ''; 
    let cont = ini; 

    for(let i = 1; i < qnt; i++){
        cont += raz;
        sent += `, ${cont}`
    }

    return `${ini}${sent}...`
}

console.log(pa(3,3,4));