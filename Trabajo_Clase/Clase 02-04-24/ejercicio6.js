function colorear(){
    var imagen = document.getElementById('escudo');
    if (imagen.src.match('escudi')){
        imagen.src = 'escudoUNAM.jpg';
    }
    else{
        imagen.src = 'escudito.jpg';
    }
}