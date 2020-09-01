// const img = document.querySelector('.img')
// console.log(img)
// img.addEventListener('click', ()=>{
//     const name = prompt('Nombre del artista')
//     const mostrarNombre = document.getElementById('nombreLinkin')
//     mostrarNombre.innerText = name
//     // document.getElementById('nombreLinkin').innerText = name

//     const cancion = prompt('Canción del artista')
//     document.getElementById('cancionLinkin').innerText = cancion


//     const album = prompt('Album del artista')
//     document.getElementById('albumLinkin').innerText = album
// })

// const imgQueen = document.querySelector('.imgQueen')
// imgQueen.addEventListener('click', ()=>{
//     const name = prompt('Nombre del artista')
//     const mostrarNombre = document.getElementById('nombreQueen')
//     mostrarNombre.innerText = name
//     // document.getElementById('nombreLinkin').innerText = name

//     const cancion = prompt('Canción del artista')
//     document.getElementById('cancionQueen').innerText = cancion

//     const album = prompt('Album del artista')
//     document.getElementById('albumQueen').innerText = album

//     document.getElementById('input').value = ''
// })

function hola(e){
   const container = e.target.closest('.container')

   container.querySelector('.nombre').innerText = prompt('Escribe el nombre del artista')

   container.querySelector('.cancion').innerText = prompt('Escribe la cancion')

   container.querySelector('.album').innerText = prompt('Escribe el album')

}
// const albumQueen = document.querySelector('#albumQueen')
// const albumQueen = document.querySelector('img')

const imgs = document.querySelectorAll('.img')
console.log(imgs)
console.log(imgs.length)

for(let i = 0; i < imgs.length; i++){
    imgs[i].addEventListener('click', hola)
}

