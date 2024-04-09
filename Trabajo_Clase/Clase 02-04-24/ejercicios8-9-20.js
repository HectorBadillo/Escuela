function cambiarColor(){
    var colorFavorito = document.getElementById('colorFavorito').value;
    document.body.style.backgroundColor = colorFavorito;

    if(colorFavorito.toLowerCase() === 'red'){
        alert('Lo sabia !')
    }
}