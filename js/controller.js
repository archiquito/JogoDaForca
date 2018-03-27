const criaController = (jogo) => {

    const $entrada = $('#entrada');
    const $lacunas = $('.lacunas');

    const exibeLacunas = () => {
        $lacunas.empty();
        jogo.getLacunas().forEach(lacuna => {
            $('<li>').addClass('lacuna').text(lacuna).appendTo($lacunas);
           
        });
       
    };

    const mudaPlaceHolder = (texto) =>  $entrada.attr("placeholder", texto);

    const guardaPalavraSecreta =  () => {
       try{
        jogo.setPalavraSecreta($entrada.val().trim());
        $entrada.val('');
        mudaPlaceHolder('chute');
        exibeLacunas();
       } catch(err){
           alert(err.message);
       }
       
    };

    const reinicia = () => {
        $lacunas.empty();
        mudaPlaceHolder("Palavra Secreta");
        jogo.reinicia();

    }

    const lerChute = () => {

        try{
            let chute = $entrada.val().trim().substr(0,1);
        
            jogo.processaChute(chute);       
            exibeLacunas();
            $entrada.val('');
            
            if(jogo.ganhouOuPerdeu()){
    
    
                setTimeout(function(){
    
                    if(jogo.ganhou()){
                        alert('Parabéns você ganhou!!! :)');
                    }else if(jogo.perdeu()){
                        alert('Que pena, tente novamente! :(');
                        
                    }
                    
                    reinicia();
                    
                },200);
    
               
            }
        } catch(err){
            alert(err.message);
        }
       
    };

    var inicia = () => {

        $entrada.keypress(event => {
            if (event.which == 13) {
                switch (jogo.getEtapa()) {
                    case 1:
                    guardaPalavraSecreta();
                        break;
                    case 2:
                        lerChute();
                        break;
                }
            }
        });
    }
    return { inicia};
};