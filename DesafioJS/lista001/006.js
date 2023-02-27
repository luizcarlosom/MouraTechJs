function peso_ideal(alt = '0', sex = ''){
    if(sex == 'm' || sex == 'M'){
        return (72.7 * alt) - 58;
    }else if(sex == 'f' || sex == 'F'){
        return (62.1 * alt) - 44.7;
    }else{
        return 'ERR0';
    }
}

console.log(peso_ideal(1.80, 'F'));