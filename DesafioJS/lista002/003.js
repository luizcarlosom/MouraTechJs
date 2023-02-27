function intervalo(num1, num2){
    let array = [];

    if(num2 > num1){
        for(let i = num1; i <= num2; i++){
            array[i-num1] = i;
        }
    }else if(num1 > num2){
        for(let i = num1; i >= num2; i--){
            array[num1-i] = i;
        }
    }else{
        array = [num1];
    }

    return array;
}

console.log(intervalo(8,8))