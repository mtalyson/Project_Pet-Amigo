function adotaPet(idlogado,idDoado,id){
    if(idlogado == idDoado){
        alert("Voê não pode adotar um Pet que voce doou");
    }
    else{
        window.location.href ="/adota?idpet="+id+"";
    }
}