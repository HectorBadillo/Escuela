// Array de rutas de imagen
var images = ['img/persona1.png', 'img/persona2.png',  'img/persona3.png', 'img/persona4.png',];
var currentIndex = 0;

document.getElementById('replace-btn').addEventListener('click', function() {
    var image = document.getElementById('my-image');
    if (image) {
        // Cambiar la imagen por la siguiente en el array
        currentIndex = (currentIndex + 1) % images.length;
        image.src = images[currentIndex];
    } else {
        alert('No hay ninguna imagen para reemplazar.');
    }
});
var images = ['img/persona1.png', 'img/persona2.png',  'img/persona3.png', 'img/persona4.png',];
var currentIndex = 0;

document.getElementById('next-btn').addEventListener('click', function() {
    var image = document.getElementById('my-image');
    if (image) {
        // Cambiar la imagen por la siguiente en el array
        currentIndex = (currentIndex + 1) % images.length;
        image.src = images[currentIndex];
    } else {
        alert('No hay ninguna imagen para reemplazar.');
    }
});

