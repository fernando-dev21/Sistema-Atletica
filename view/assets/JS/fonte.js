$(document).ready(function(){

    var fonte = 18;
    $('#aumentar').click(function(){
        if(fonte<23){
            fonte = fonte + 1;
            $('body').css({'font-size': fonte+'px'});
        }
    });
    $('#diminuir').click(function(){
        if(fonte>18){
            fonte = fonte - 1;
            $('body').css({'font-size': fonte+'px'});
        }
    });

    
});