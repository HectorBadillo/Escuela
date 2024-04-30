
function initMap() {
    // Coordenadas de la ubicación que deseas mostrar en el mapa
    var myLatLng = {lat: 19.460917, lng: -99.2152052}; // Por ejemplo, Nueva York

    // Crear un nuevo mapa en el elemento con id "map"
    var map = new google.maps.Map(document.getElementById('map'), {
        center: myLatLng, // Centrar el mapa en las coordenadas especificadas
        zoom: 12 // Establecer el nivel de zoom
    });

    // Crear un marcador en la ubicación especificada
    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: '¡Aquí estoy!'
    });
}
