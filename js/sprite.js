const createSprite = (seletor) => {
 
    let $el = $(seletor);
 
    const frames = [ 'frame1','frame2','frame3','frame4','frame5','frame6','frame7','frame8','frame9' ];
 
    let fEmUso = 0;
 
    let fFinal = frames.length - 1;
  
    
    $el.addClass(frames[fEmUso]);
    
  
    
    const temProx = () =>  fEmUso + 1 <= fFinal;

    const moverPara = (de,para) => $el.removeClass(de).addClass(para);

    const nextFrame = () => {
        if(temProx()) moverPara(frames[fEmUso],frames[++fEmUso]);
     
    };

    const reseta = () => {
        moverPara(frames[fEmUso],frames[0]); 
        fEmUso = 0;
        
    };

    const finalizou = ()=>{

        if(!temProx()){
            return true;
        }else{
            return false;
        };
    };

    return {
        nextFrame,
        reseta,
        finalizou
    };
 };