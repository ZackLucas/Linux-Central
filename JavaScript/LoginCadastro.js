$(document).ready(function(){
    // estrutara basica de login "ps:apenas para fins demonstrativos!!!!"
    $("#logar").click(function(){
        $("#error").css({color:"#f00"});
        var user = $("#userEmail").val();
        var senha = $("#userSenha").val();
        if(user == "Lucas" && senha == "47810144"){
            alert("Seja Bem-Vindo");
            $("#userEmail").text("");
            $("#userSenha").text("");
        $("#Usuario").text(user);//coloca o nome do usuario na parte onde ficava escrito login|cadastrar
        $("#login").slideUp(700);
        }else if(user != "Lucas" && senha != "47810144"){
            $("#error1000").text("*Nome de usuario não existe");//mostra o erro 1000
            $("#error1001").text(" * Senha incorreta");//mostra o erro 1001
        }else if(user != "Lucas"){
            $("#error1000").text("*Nome de usuario não existe");//mostra o erro 1000
        }else{
            $("#error1001").text(" * Senha incorreta");//mostra o erro 1001
        }
    });
    //mesma funçao do codigo acima porem a função acontece qnd é clicado enter
    $(document).keypress(function(e){
        if(e.which == 13){
            $("#error").css({color:"#f00"});
            var user = $("#userEmail").val();
            var senha = $("#userSenha").val();
            if(user == "Lucas" && senha == "47810144"){
                alert("Seja Bem-Vindo");
            $("#Usuario").text(user);
            $("#login").slideUp(700);
            }else if(user != "Lucas" && senha != "47810144"){
                $("#error1000").text(" * Usuario não existe");
                $("#error1001").text(" * Senha incorreta");
            }else if(user != "Lucas"){
                $("#error1001").text(" * Senha incorreta");
            }else{
                $("#error1001").text(" * Senha incorreta");
            }
        }
    });
    //muda a cor do botão de fechar a caixa de login
    $("#fecharAba").mouseenter(function(){
        $(this).css({backgroundColor:"#f44",color:"#fff"});
    });
    $("#fecharAba").mouseout(function(){
        $(this).css({backgroundColor:"#c0c0c0",color:"#000"});
    });
    //adciona o metódo click pois o botão de fechar a caixa de login/cadastramento é uma div
    $("#fecharAba").click(function(){
        $("#login").slideUp(700);
    });
});