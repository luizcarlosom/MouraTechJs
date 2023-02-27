function ranking(jogos) {
    const times = new Set(jogos.flatMap(jogo => [jogo.Time1, jogo.Time2]));
    const classificacao = Array.from(times).map(time => ({
      Time: time, P: 0, J: 0, V: 0, E: 0, D: 0, GP: 0, GC: 0, SG: 0
    }));
    
    for (const jogo of jogos) {
      const time1 = classificacao.find(time => time.Time === jogo.Time1);
      const time2 = classificacao.find(time => time.Time === jogo.Time2);
      
      time1.J++;
      time2.J++;
      time1.GP += jogo.P1;
      time2.GP += jogo.P2;
      time1.GC += jogo.P2;
      time2.GC += jogo.P1;
      time1.SG = time1.GP - time1.GC;
      time2.SG = time2.GP - time2.GC;
      
      if (jogo.P1 > jogo.P2) {
        time1.P += 3;
        time1.V++;
        time2.D++;
      } else if (jogo.P2 > jogo.P1) {
        time2.P += 3;
        time2.V++;
        time1.D++;
      } else {
        time1.P++;
        time2.P++;
        time1.E++;
        time2.E++;
      }
    }
    
    return classificacao
      .sort((time1, time2) => time2.P - time1.P || time2.V - time1.V || time2.SG - time1.SG || time2.GP - time1.GP);
  }