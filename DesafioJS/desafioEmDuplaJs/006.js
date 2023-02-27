function volleyball(str){
    let recebendo = str.split(',');
    let cont_vit = 0;
    let cont_derr = 0;
    let set_vit = 0;
    let set_der = 0;

    let vitorias = recebendo.filter(vit => {
        if(vit.substring(0,1) > vit.substring(2,3)){
            cont_vit++
        }
    })
    
    let derrotas = recebendo.filter(vit => {
        if(vit.substring(0,1) < vit.substring(2,3)){
            cont_derr++
        }
    })

    let sets_v = recebendo.filter(vit => {
        if(vit.substring(0,1) > 0){
            set_vit += Number(vit.substring(0,1))
        }
    })

    let sets_d = recebendo.filter(vit => {
        if(vit.substring(2,3) > 0){
            set_der += Number(vit.substring(2,3))
        }
    })

    
    return [cont_vit,cont_derr,set_vit,set_der]

}

console.log(volleyball('3x1,3x0,2x3,3x0,1x3,3x1'))