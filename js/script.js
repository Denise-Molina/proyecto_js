let precioEntrada = '1300'
let usuario = 'matias'
let contraseña = '1234'
let ingresar = false
let cuponMiercoles = 'miercoles'
let cupon = false
let descuento = '500'
let prox = false

//alert('Bienvenido/a a nuestro sitio de compra de entradas')
//let preguntaRegistro = alert('A continuación inicie sesión');

/*
for (let i = 2; i >= 0; i--) {
    let usuarioIngresado = prompt('Escribe tu nombre de usuario. Tienes ' + (i + 1) + ' intentos.');
    let contraseñaIngresada = prompt('Escriba su contraseña. Tienes ' + (i + 1) + ' intentos.')
    if (usuarioIngresado === usuario) {
        alert('Bienvenido ' + usuario);
        ingresar = true;
        break;
    } else {
        alert('Te queda ' + i + ' intentos.');
    }

    if (contraseñaIngresada === contraseña) {
        alert('Bienvenido ' + usuario);
        ingresar = true;
        break;
    } else {
        alert('Te queda ' + i + ' intentos.');
    }
}

*/

//array

const cartelera = [{
        titulo: "DC Liga de Supermarscotas",
        anio: 2022,
        genero: "animacion",
        duracion: "106min",
    },
    {
        titulo: "Elvis",
        anio: 2022,
        genero: "Biografia",
        duracion: "160min",
    },
    {
        titulo: "La habitación del horror",
        anio: 2022,
        genero: "Terror",
        duracion: "98min",
    },
    {
        titulo: "Jurassic world dominio",
        anio: 2022,
        genero: "Aventuras",
        duracion: "147min",
    }
]

console.log(cartelera);
//alert("Entradas disponibles")

/*
for (i of cartelera) {
    alert(i.titulo + " " + i.anio + " " + i.genero + " " + i.duracion)
}

*/

//fin del array



if (ingresar) {
    let primerPregunta = prompt('¿Para que función desea comprar entrada?: \n1 - DC Liga de Supermarscotas.  \n2 - Elvis. \n3 - La habitación del horror. \n4 - Jurassic world dominio.');


    switch (primerPregunta) {
        case '1':
            alert("la pelicula seleccionada es 'DC Liga de Supermarscotas'")
            alert('El monto de la entrada es de $1300')
            break;
        case '2':
            alert("la pelicula seleccionada es 'Elvis'")
            alert('El monto de la entrada es de $1300')
            break;
        case '3':
            alert("la pelicula seleccionada es 'La habitación del horror'")
            alert('El monto de la entrada es de $1300')
            break;
        case '4':
            alert("la pelicula seleccionada es 'Jurassic world dominio'")
            alert('El monto de la entrada es de $1300')
            break;
        default:
            alert('Elegiste una opción invalida')
            break;
    }

}
/*
let cantidadDeEntradas = prompt('Por favor ingrese la cantidad de entradas que desea comprar')
*/
//calculo

let total = precioEntrada * cantidadDeEntradas;
//alert('El monto total es de ' + total);





/*
let totalConDescuento = total / 2;
alert('Por ser un dia de descuento su entrada sera de ' + totalConDescuento)
*/

//codigo de prueba
//let precioDescuento = (precioEntrada - descuento) * cantidadDeEntradas

//continuar o finalizar compra


let cuponDescuento = prompt('¿Tiene algun cupon de descuento?: \n1 - si. : \n2 - no.')
continuar = true

switch (cuponDescuento) {
    case '1':
        let cuponDeDescuento = prompt('Ingrese el cupón.');
        if (cuponDeDescuento === cuponMiercoles) {
            alert('Su cupón es valido');
            cupon = true;
            let precioFinal = total - descuento
            alert('El monto a abonar es de ' + precioFinal)
            break;
        } else {
            alert('Cupón no valido');
        }
        case '2':
            alert('Su monto a abonar será de ' + total);
            break;
        default:
            break;

}

//array nuevos estrenos

const proximosEstrenos = [{
    peliculaNueva: 'El perro samurai',
    fechaDeEstreno: '11/08/2022',
    duracion: '90min',
    genero: 'animada',
}, {
    peliculaNueva: '30 noches con mi ex',
    fechaDeEstreno: '11/08/2022',
    duracion: '90min',
    genero: 'comedia',
}, {
    peliculaNueva: 'After amor infinito',
    fechaDeEstreno: '25/08/2022',
    duracion: '90min',
    genero: 'romance',
}, {
    peliculaNueva: 'Un crimen Argentino',
    fechaDeEstreno: '28/08/2022',
    duracion: '104min',
    genero: 'drama',
}]


//fin del array

proximamente = prompt('¿Desea saber nuestros proximos estrenos?: \n1 - si. : \n2 - no. ');
switch (proximamente) {
    case '1':
        let peliculaFiltrada;
        peliculaFiltrada = prompt('Ingrese el nombre de la pelicula');
        const peliFiltrada = proximosEstrenos.filter(peli => peli.peliculaNueva.includes(peliculaFiltrada));
        alert('La pelicula ' + peliFiltrada + ' proximamente en cine Hits')
        break;
    case '2':
        alert('De acuerdo, hasta luego')
        break;
    default:
        break;
}


let nuevoMensaje = document.createElement('h3');
nuevoMensaje.innerHTML = '<h3>Gracias por su compra, vuelva pronto!!</h3>';
document.body.append(nuevoMensaje);


let atencionAlCliente = document.createElement('h3');
atencionAlCliente.innerHTML = '<h3>Nuestro cine no se responsabiliza por daños o perdidas</h3>';
document.body.append(atencionAlCliente);


let atencionCliente = document.createElement('p');
atencionCliente.innerHTML = '<p>Por inconvenientes con la compra o reserva de su entrada, contactactarse al: 0800-666-0575</p>';
document.body.append(atencionCliente);

let horarioDeAtencion = document.createElement('p');
horarioDeAtencion.innerHTML = '<p>(Horario de atención de 12hs a 23hs)</p>'
document.body.append(horarioDeAtencion);

