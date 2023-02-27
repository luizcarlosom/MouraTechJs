function rgbToHexa(num1,num2,num3){
    let array = [num1,num2,num3];
    let num_1 = array[0].toString(16).padStart(2, '0');
    let num_2 = array[1].toString(16).padStart(2, '0');
    let num_3 = array[2].toString(16).padStart(2, '0');
    let res = '#'+num_1+num_2+num_3

    return res
}
console.log(rgbToHexa(0,175,104))