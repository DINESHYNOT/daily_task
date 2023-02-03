$(document).ready(function(){
    $("input").keydown(function(){
        $(this).css("background-color","silver");
    });
    $("input").keyup(function(){
        $(this).css("background-color","pink");
    });
});