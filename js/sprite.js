var createSprite = function(seletor){
 
    var $el = $(seletor);
 
    var frames = [ 'frame1','frame2','frame3','frame4','frame5','frame6','frame7','frame8','frame9' ];
 
    var fEmUso = 0;
 
    var fFinal = frames.length - 1;
  
    
    $el.addClass(frames[fEmUso]);
    
  
    
    var temProx = function(){
              
        return fEmUso + 1 <= fFinal;
    
    };

    var moverPara = function(de,para){
        $el.removeClass(de).addClass(para);
    };

    var nextFrame = function (){
        if(temProx()) moverPara(frames[fEmUso],frames[++fEmUso]);
     
    };

    var reseta = function(){
        moverPara(frames[fEmUso],frames[0]); 
        fEmUso = 0;
        
    };

    var finalizou = function(){

        if(!temProx()){
            return true;
        }else{
            return false;
        };
    };

    return {
        nextFrame: nextFrame,
        reseta: reseta,
        finalizou: finalizou
    };
 };