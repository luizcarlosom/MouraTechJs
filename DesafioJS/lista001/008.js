function preco_final(preco, pagamento){
    
    switch(pagamento){
        case 1:
            let pix = preco - (preco * 0.15);
            let real = pix.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
            
            return real;
        case 2:
            let debito = preco - (preco * 0.10);
            let real_2 = debito.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});

            return real_2;
        case 3:
            let credito = preco - (preco * 0.05);
            let real_3 = credito.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});

            return real_3;
        case 4:
            let real_4 = preco.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
            
            return real_4;
        default:
            return 'ERR0';
    }
}

console.log(preco_final(100,4));