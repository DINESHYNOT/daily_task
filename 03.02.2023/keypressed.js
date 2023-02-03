$(document).ready(function(){
    let x=0;
    $("input").keypress(function(){
        $("span").text(x=x+1);
    });
});