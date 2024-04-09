function validar(){
    var valor, text;
    valor = document.getElementById('numero').value;
    if(isNaN(valor) || valor <1 || valor >10){
        text = 'No es pequeño';
    }
    else{
        text = 'Muy bien'
    }
    document.getElementById('mensaje').innerHTML = text;
}