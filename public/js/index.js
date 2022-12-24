console.log('conected');

const main = document.querySelector('main');
const h2 = document.querySelector('h2')
const a = document.querySelector('a')
const p = document.querySelectorAll('p')

main.style.display = 'block'
const nombre = prompt('ingrese su nombre');
if(nombre){
    document.querySelector('.subtitulo').textContent += nombre
}else{
    document.querySelector('.subtitulo').textContent += 'invitado'
}

h2.style.textTransform = 'uppercase';
a.style.color = '#E51B3E'

const cambio = confirm('queres cambiar el fondo?')
if(cambio){
    document.body.classList.add('fondo')
}

p.forEach((element , index) => {
    if((index + 1) % 2 === 0){
        element.classList.add('destacadoPar')
    }else{
        element.classList.add('destacadoImpar')
    }
});