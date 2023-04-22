console.log('holaa');
const acordion = document.getElementsByClassName('contenido');

for(let i = 0; i < acordion.length; i++){
    acordion[i].addEventListener('click', function () {
        this.classList.toggle('active');
    })
};