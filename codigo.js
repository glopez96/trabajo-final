let botonInicio = document.getElementById('inicio');

let botonPause = document.getElementById('pause')

let video = document.querySelector('video');

botonInicio.addEventListener('click',()=> {
    video.play();
});

botonPause.addEventListener('click',()=> {
    video.pause();
});

let duracionBloque = document.querySelector('.duracionVideo')

duracionBloque.textContent= `Duracion del video : ${video.duration}`
