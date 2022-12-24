console.log('moviesAdd connect');
const h1 = document.querySelector('h1')
const section = document.querySelector('section')
const article = document.querySelector('article')


h1.innerHTML += 'AGREGAR PELICULAS'
h1.classList.add('titulo')

//article
article.classList.add('fondoTransparente')

//section
section.classList.add('fondoCRUD')