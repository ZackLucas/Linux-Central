$(document).ready(function(){
    //mantendo a caixa fechada
    $("#caixaCadastro").slideUp(0);
    $("#cadastrar").click(function(){
        $("#caixaCadastro").show(800);
        $("#login").slideUp(800);
    });
    // definindo a cor do botão ao passar encima do botão de fechar caixa
    $("#fecharAba2").mouseenter(function(){
        $(this).css({backgroundColor:"#f44",color:"#fff"});
    });
    $("#fecharAba2").mouseout(function(){
        $(this).css({backgroundColor:"#c0c0c0",color:"#000"});
    });
    $("#fecharAba2").click(function(){
        $("#caixaCadastro").slideUp(1000);
        $("#login").slideUp(1000);
    });

});