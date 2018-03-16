var criaJogo = function(){
   
    var $palavra = $('#entrada').val();
   
    var contaPalavra = $palavra.length;
    
    var arrPalavra = $palavra.split("");
    
   
    var setPalavraSecreta = function(palavra){
       
      palavraSecreta = palavra;
     
       console.log(palavraSecreta);
    };

    var getLacunas = function(){
      
        lacunas = setPalavraSecreta();
        console.log(lacunas);
    };


    var getEtapa = function(){
        console.log()
    };

    return{
        setPalavraSecreta: setPalavraSecreta,
        getLacunas: getLacunas,
        getEtapa: getEtapa
    }

};  