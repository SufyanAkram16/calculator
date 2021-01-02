function onClickHandler(num)
{
    var output = document.getElementById("output").value ;
    document.getElementById("output").value = output + num ;
} 
function equal(){

     var exp = document.getElementById("output").value ;
     if (exp){
        document.getElementById("output").value = eval(exp) ;

     }
}

function clean(){

    document.getElementById("output").value = "" ;
}
