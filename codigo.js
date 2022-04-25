let botonInicio = document.getElementById('inicio');

let botonPause = document.getElementById('pause')

let video = document.querySelector('video');

botonInicio.addEventListener('click',()=> {
    video.play();
});

botonPause.addEventListener('click',()=> {
    video.pause();
});

