function excluirpet(id){
    fetch('/doacao/excluipet/'+id+'',{
        method: 'DELETE',
        headers: {'content-type': 'application/json'}
    }).then(has => {
        window.location.href = "/petsdoados";
    })
}