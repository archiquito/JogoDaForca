var criaJogo = function(sprite){
   
    var $palavra = $('#entrada').val();
    var lacunas = [];
    var etapa = 1;
    var letra = '';
    var ganhou = false;
    var perdeu = false;
   
    var contaPalavra = $palavra.length;
    
    var arrPalavra = $palavra.split("");
    

    var criaLacunas = function(letra){   
        
        for(let i=0; i < palavraSecreta.length; i++){
          
            lacunas.push('');        
  
        }

    };

    var insereLetra = function(){

    };

    var proximaEtapa = function(num){
        etapa = num;
    };

    var setPalavraSecreta = function(palavra){
       
      palavraSecreta = palavra;
      criaLacunas();
      proximaEtapa(2);
     
       console.log(palavraSecreta);
    };

    var getLacunas = function(){
      
       return lacunas;
    };


    var getEtapa = function(){
        return etapa;
    };



    var processaChute = function(chute){
         var exp = new RegExp(chute, 'gi'),
            resultado,
            acertou = false;

        while(resultado = exp.exec(palavraSecreta)){
            lacunas[resultado.index] = chute;
            acertou = true;
        }

        if(!acertou)sprite.nextFrame();

    };

    var ganhou = function(){
        return (lacunas.length ? !lacunas.some(function(lacuna){ return lacuna == '';}) : false);

    };

    var perdeu = function(){
       return sprite.finalizou();
    };

    
    var ganhouOuPerdeu = function(){
        return ganhou() || perdeu();
    };

    var reinicia = function(){
        etapa = 1;
        lacunas = [];
        palavraSecreta ='';
        sprite.reseta();
    };

    return{
        setPalavraSecreta: setPalavraSecreta,
        getLacunas: getLacunas,
        getEtapa: getEtapa,
        processaChute: processaChute,
        ganhou: ganhou,
        perdeu: perdeu,
        ganhouOuPerdeu: ganhouOuPerdeu,
        reinicia
    }

};  