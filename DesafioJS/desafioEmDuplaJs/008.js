function velha(array){
    let jogo_velha = array;
    if(jogo_velha[0] == jogo_velha[1] && jogo_velha[1] == jogo_velha[2]){
        if(jogo_velha[0] != ' '){
            return 'Jogador '+jogo_velha[0]+' venceu!';
        }
    }else if(jogo_velha[3] == jogo_velha[4] && jogo_velha[4] == jogo_velha[5]){
        if(jogo_velha[3] != ' '){
            return 'Jogador '+jogo_velha[3]+' venceu!';
        }
    }else if(jogo_velha[6] == jogo_velha[7] && jogo_velha[7] == jogo_velha[8]){
        if(jogo_velha[6] != ' '){
            return 'Jogador '+jogo_velha[6]+' venceu!';
        }
    }else if(jogo_velha[0] == jogo_velha[3] && jogo_velha[3] == jogo_velha[6]){
        if(jogo_velha[3] != ' '){
            return 'Jogador '+jogo_velha[3]+' venceu!';
        }
    }else if(jogo_velha[1] == jogo_velha[4] && jogo_velha[4] == jogo_velha[7]){
        if(jogo_velha[7] != ' '){
            return 'Jogador '+jogo_velha[7]+' venceu!';
        }
    }else if(jogo_velha[2] == jogo_velha[5] && jogo_velha[5] == jogo_velha[8]){
        if(jogo_velha[2] != ' '){
            return 'Jogador '+jogo_velha[2]+' venceu!';
        }
    }else if(jogo_velha[0] == jogo_velha[4] && jogo_velha[4] == jogo_velha[8]){
        if(jogo_velha[8] != ' '){
            return 'Jogador '+jogo_velha[4]+' venceu!';
        }
    }else if(jogo_velha[2] == jogo_velha[4] && jogo_velha[4] == jogo_velha[6]){
        if(jogo_velha[4] != ' '){
            return 'Jogador '+jogo_velha[4]+' venceu!';
        }
    }
    let x = 0
    let o = 0 
    let verificar = false
    jogo_velha.forEach(element => {
        if (element == "X"){
            x++
        } else if(element == "O"){
            o++
        }

        if(element == ' ') {
            verificar = true
        }
    });
    if(verificar){
        if(o<x){
            return 'Vez do jogador O.'
        }else{
            return 'Vez do jogador X.'
        }
    }else{
        return 'Deu velha!'
    }
        

}
console.log(velha([" "," "," "," ","O","X","O","X","O"]))