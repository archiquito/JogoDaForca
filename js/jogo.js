const criaJogo = (sprite) => {
   
    let $palavra = '';
    let lacunas = [];
    let etapa = 1;


    const criaLacunas = (letra) => {   
        
        for(let i=0; i < palavraSecreta.length; i++){
          
            lacunas.push('');        
  
        }

    };

    const proximaEtapa = (num) => etapa = num;

    const setPalavraSecreta = (palavra) => {
     if(!palavra.trim()) throw Error("Palavra secreta inválida! :/");
      palavraSecreta = palavra;
      criaLacunas();
      proximaEtapa(2);
     
       console.log(palavraSecreta);
    };

    const getLacunas = () => lacunas;


    const getEtapa = () => etapa;



    const processaChute = (chute) =>{
        if(!chute.trim()) throw Error("Chute Inválido! :/");
        
         const exp = new RegExp(chute, 'gi');
            let resultado, acertou = false;

        while(resultado = exp.exec(palavraSecreta)){
            lacunas[resultado.index] = chute;
            acertou = true;
        }

        if(!acertou)sprite.nextFrame();

    };

    const ganhou = () => (lacunas.length ? !lacunas.some(function(lacuna){ return lacuna == '';}) : false);

    const perdeu = () => sprite.finalizou();

    
    const ganhouOuPerdeu = () => ganhou() || perdeu();

    const reinicia = () =>{
        etapa = 1;
        lacunas = [];
        palavraSecreta ='';
        sprite.reseta();
    };

    return{
        setPalavraSecreta,
        getLacunas,
        getEtapa,
        processaChute,
        ganhou,
        perdeu,
        ganhouOuPerdeu,
        reinicia
    }

};  