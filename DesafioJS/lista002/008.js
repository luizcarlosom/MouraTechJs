function fibonacci(num){

    if(num >= 1){
        if(num == 1){
            return '0...';
        }else{
            let array = [0,1];
            let string = '';
            
    
            for(let i = 2; i < num; i++){
                array[i] = array[i-2] + array[i-1];  
            }
        
            array.forEach(turn => {
                string += `${turn}, `
            })

            let tam = array.pop();
            
            if(tam == 1){
                let verify = array.length;
                if(verify == 2){
                    return '0, 1, 1...'
                }
            }else{
                let substituiton = string.replace(`${tam}, `, `${tam}...`)
                return substituiton;
            }
            
        }
    }
}

console.log(fibonacci(5))