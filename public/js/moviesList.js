console.log('movieList connected');

const body = document.querySelector('body')
const h1 = document.querySelector('h1')

const modoOscuro = confirm('desea modo oscuro?')
if(modoOscuro){
    document.body.style.backgroundColor = '#7f7f7f'
    document.body.classList.add('fondoMoviesList')
}

h1.innerHTML += 'LISTADO DE PELÍCULAS'
h1.style.color = 'white'
h1.style.backgroundColor = 'teal'
h1.style.border = '20px'