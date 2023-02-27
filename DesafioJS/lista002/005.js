function fatorial(num){
    
    const fatorial = n => {
        if (n > 1) {
            return n * fatorial(n - 1)
        }
        return n
    }

    let numbers = '';
    let res = '';
    
    for(let i = num; i >= 1; i--){
        numbers += `${i} X `  
    }

    res = num + '!' + ' = ' + numbers + '= ' + fatorial(num)
    res = res.replace('1 X', '1')
    
    return res
}

console.log(fatorial(5))