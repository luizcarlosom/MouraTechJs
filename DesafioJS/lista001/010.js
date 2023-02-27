function bhaskara(ax2, bx, c){
    let delta = (bx ** 2) + (-4 * ax2 * c);
    let x1 = (-bx + Math.sqrt(delta)) / (2 * ax2);
    let x2 = (-bx - Math.sqrt(delta)) / (2 * ax2);
    
    if(delta < 0){
        return [];
    }else if(delta === 0){
        return [x1];
    }else{
        return[x1, x2];
    }

}

console.log(bhaskara(-3, 18, -15));