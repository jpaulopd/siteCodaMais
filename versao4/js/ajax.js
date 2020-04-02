//carrega a pagina indicada 
$(document).ready(function(){
    $("#box").hide();
    $(".servicos").click(function(){
        $("#box").load("servicos.html").show();
        $("#home").hide();
    });
    $(".sobre").click(function(){
        $("#box").load("sobre.html").show();
        $("#home").hide();
    });
    $(".parceiros").click(function(){
        $("#box").load("parceiros.html").show();
        $("#home").hide();
    });
    $(".contato").click(function(){
        $("#box").load("contato.html").show();
        $("#home").hide();
    });
    $(".home").click(function(){
        $("#home").fadeIn();
        $("#box").hide();
    });
});