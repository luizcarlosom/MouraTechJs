function primo(num){

    let array = [];
    let isCousin = 0;

    if(num <= 1){
        return false;
    }else{
        
        for(let i = 2; i < num; i++){
            array[i-2] = i 
        }
    
        array.forEach(test => {
            if(num % test == 0){
                isCousin++//se nenhum der resto = 0 é primo
            }
        })

        if(isCousin == 0){
            return true;
        }else{
            return false;
        }
    }
    
}

console.log(primo(2))