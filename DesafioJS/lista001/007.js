function imc(altura, peso){
    
    let IMC = peso / (altura ** 2);

    if(IMC < 18.5){
        return "Baixo peso";
    }else if(IMC < 25){
        return "Peso normal";
    }else if(IMC < 30){
        return "Excesso de peso";
    }else if(IMC < 35){
        return "Obesidade";
    }else{
        return "Obesidade extrema"
    }    
}

console.log(imc(1.80, 120.6));