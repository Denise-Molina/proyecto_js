//proximos estrenos
//archivo data.json

const proximamentePelis = document.querySelector('.nuevosEstrenos');

fetch('/js/data.json')
    .then((response) => response.json())
    .then((data) => {
        data.forEach((peliculas) => {
            const div = document.createElement('div')
            div.innerHTML =`
            <div  style="background-color: transparent " >
            <img src=${peliculas.img} class="cartelera"  alt="...">
            <h5 class="card-title pt-2 text-center text-light tituloProx ">${peliculas.peliculaNueva}</h5>
            <div >
            <ul>
            <li class="card-text text-white description ">Fecha de Estreno: ${peliculas.fechaDeEstreno}</li>
            <li class="card-text text-white description">Duración: ${peliculas.duracion}</li>
            <li class="card-text text-white description">Género: ${peliculas.genero}</li>
            </ul>
            </div>
            </div>
`
proximamentePelis.append(div)
        })
    })


