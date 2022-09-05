//proximos estrenos

const proximamentePelis = document.querySelector('nuevosEstrenos');

fetch('./js/data.json')
    .then((response) => response.json())
    .then((data) => {
        data.forEach((peliculas) => {
            const div = document.createElement('div')
            div.innerHTML =`
            <div class="card shadow mb-1" style="background-color: rgb(51, 51, 51, 0.602)" style="width: 20rem;">
            <h5 class="card-title pt-2 text-center text-light ">${peliculas.peliculaNueva}</h5>
            <div class="card-body">
            <ul>
            <li class="card-text text-white description">Fecha de Estreno: ${peliculas.fechaDeEstreno}</li>
            <li class="card-text text-white description">Duración: ${peliculas.duracion}</li>
            <li class="card-text text-white description">Género: ${peliculas.genero}</li>
            </ul>
            </div>
            </div>
`
proximamentePelis.append(div)
        })
    })
