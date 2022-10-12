//seleccion de mascota
const seleccionarMascota = document.getElementById('seleccionarMascota')
const contenedorDeTarjetas = document.getElementById('contenedorDeTarjetas')
const botonSeleccionar = document.getElementById('botonSeleccionar')
//seccion del mapa 
const verMapa = document.getElementById('verMapa')
const canvas = document.getElementById('canvas')
//seccion de eleccion de ataques
const seleccionarAtaque = document.getElementById('seleccionarAtaque')
const contenedorAtaques = document.getElementById('contenedorAtaques')
const resultado = document.getElementById('resultado')
const reiniciar = document.getElementById('reiniciar')
const botonReiniciar = document.getElementById('botonReiniciar')
const vidasJugador = document.getElementById('vidasJugador')
const mascotaJugador = document.getElementById('mascotaJugador')
const ataquesDelJugador = document.getElementById('ataquesDelJugador')
const vidasEnemigo = document.getElementById('vidasEnemigo')
const mascotaEnemigo = document.getElementById('mascotaEnemigo')
const ataquesDelEnemigo = document.getElementById('ataquesDelEnemigo')

let opcionPokemones

class Pokemon {
  constructor (nombre,imagen,foto) {
    this.nombre=nombre
    this.imagen=imagen
    this.foto=foto
    this.ataques=[]
  }
}

const charizard = new Pokemon('Charizard','./img/charizar.png','./img/charizardC.png');
const blastoide = new Pokemon('Blastoide','./img/blastoide.png','./img/blastoideC.png');
const venusaur = new Pokemon('Venusaur','./img/venusaur.png','./img/venusaurC.png');
charizard.ataques.push=({'Ataque':'🔥','Id':'ataque-fuego'},{'Ataque':'🔥','Id':'ataque-fuego'},{'Ataque':'💧','Id':'ataque-agua'},{'Ataque':'🌱','Id':'ataque-tierra'})
blastoide.ataques.push=({'Ataque':'💧','Id':'ataque-agua'},{'Ataque':'💧','Id':'ataque-agua'},{'Ataque':'🔥','Id':'ataque-tierra'},{'Ataque':'🌱','Id':'ataque-tierra'})
venusaur.ataques.push=({'Ataque':'🌱','Id':'ataque-tierra'},{'Ataque':'🌱','Id':'ataque-tierra'},{'Ataque':'💧','Id':'ataque-agua'},{'Ataque':'🔥','Id':'ataque-fuego'})

let pokemones=[charizard,blastoide,venusaur]

iniciarJuego();

function iniciarJuego() {
  seleccionarAtaque.style.display = 'none'
  verMapa.style.display = 'none'
  
  pokemones.forEach(element => {
    opcionPokemones =`
    <input type="radio" name="mascota" id=${element.nombre} />
    <label class="tarjeta-de-mokepon" for=${element.nombre}>
         <p>${element.nombre}</p>
         <img src=${element.imagen} alt=${element.nombre}>
    </label>
    `

    contenedorDeTarjetas.innerHTML += opcionPokemones
    inputBlastoide = document.getElementById('Blastoide')
    inputCharizard = document.getElementById('Charizard')
    inputVenusaur = document.getElementById('Venusaur')
  })

  botonSeleccionar.addEventListener('click',seleccionarMascotaJugador)
}

let eleccionMascotaJugador,eleccionMascotaEnemigo

function seleccionarMascotaJugador(){
	if(inputBlastoide.checked){
		eleccionMascotaJugador=inputBlastoide.id
		mascotaJugador.innerHTML = inputBlastoide.id
	}else if(inputCharizard.checked){
		eleccionMascotaJugador=inputCharizard.id
		mascotaJugador.innerHTML = inputCharizard.id
	}else if(inputVenusaur.checked){
		eleccionMascotaJugador=inputVenusaur.id
		mascotaJugador.innerHTML = inputVenusaur.id
	}else{
		return alert('No escogio ningun Pokemon')
	}
	console.log(eleccionMascotaJugador)
	seleccionarMascotaEnemigo()
}


const random = () =>{
	return Math.round(Math.random()*2)
}

function seleccionarMascotaEnemigo(){
	let numMascotaEnemigo=random()
	console.log(numMascotaEnemigo)
}
