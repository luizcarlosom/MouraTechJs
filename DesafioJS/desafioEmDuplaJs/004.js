function recruta(str) {
    let direcao = 'Norte'; 
    for (let i = 0; i < str.length; i++) {
      if (str[i] === 'E') {
        switch (direcao) {
          case 'Norte':
            direcao = 'Oeste';
            break;
          case 'Sul':
            direcao = 'Leste';
            break;
          case 'Leste':
            direcao = 'Norte';
            break;
          case 'Oeste':
            direcao = 'Sul';
            break;
        }
      } else if (str[i] === 'D') {
        switch (direcao) {
          case 'Norte':
            direcao = 'Leste';
            break;
          case 'Sul':
            direcao = 'Oeste';
            break;
          case 'Leste':
            direcao = 'Sul';
            break;
          case 'Oeste':
            direcao = 'Norte';
            break;
        }
      }
    }
    return direcao;
}
console.log(recruta('EEED'))