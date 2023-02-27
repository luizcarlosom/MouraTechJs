function ipv4_bits(num){
    
    let stringNum = num;
    let slice = stringNum.split(".");
    let res = '';

    let num1 = Number(slice[0])
    let num2 = Number(slice[1])
    let num3 = Number(slice[2])
    let num4 = Number(slice[3])

    if(num1 >= 0 && num1 <= 255 && num2 >= 0 && num2 <= 255 && num3 >= 0 && num3 <= 255 && num4 >= 0 && num4 <= 255){

        let transform_1 = num1.toString(2);
        let transform_2 = num2.toString(2);
        let transform_3 = num3.toString(2);
        let transform_4 = num4.toString(2);

        let array = [transform_1, transform_2, transform_3, transform_4]
        let receiving = '';
        let cont = 0;
        let completed = '';
        let zero = '0';
        let c = 0;
        
        array.forEach(numbers => {
            receiving = numbers    
            if(numbers.length < 8){    
                if(receiving == 0){
                    cont = 8 - 1;
                }else{
                    cont = 8 - receiving.length 
                }
                completed = receiving.replace(`${receiving}`, `${zero.repeat(cont)}${receiving}`);
                c++
                array[c-1] = completed;
            }else{
                c++
                array[c-1] = receiving;
            }
        })
        res = `${array[0]}${array[1]}${array[2]}${array[3]}`

        return res
    }  
}

console.log(ipv4_bits('0.15.0.1'))