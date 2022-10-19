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

let pokemones=[]
let opcionDePokemones
let inputCharizard,inputBlastoide,inputVenusaur
let eleccionMascotaJugador

class Pokemon {
  constructor (nombre,imagen,foto) {
    this.nombre=nombre
    this.imagen=imagen
    this.foto=foto
    this.ataques=[]
  }
}

let charizard = new Pokemon('Charizard','./img/charizar.png','./img/charizardC.png');
let blastoide = new Pokemon('Blastoide','./img/blastoide.png','./img/blastoideC.png');
let venusaur = new Pokemon('Venusaur','./img/venusaur.png','./img/venusaurC.png');
charizard.ataques.push(
	{'Ataque':'🔥','Id':'ataque-fuego'},
	{'Ataque':'🔥','Id':'ataque-fuego'},
	{'Ataque':'💧','Id':'ataque-agua'},
	{'Ataque':'🌱','Id':'ataque-tierra'}
	)
blastoide.ataques.push(
	{'Ataque':'💧','Id':'ataque-agua'},
	{'Ataque':'💧','Id':'ataque-agua'},
	{'Ataque':'🔥','Id':'ataque-tierra'},
	{'Ataque':'🌱','Id':'ataque-tierra'}
	)
venusaur.ataques.push(
	{'Ataque':'🌱','Id':'ataque-tierra'},
	{'Ataque':'🌱','Id':'ataque-tierra'},
	{'Ataque':'💧','Id':'ataque-agua'},
	{'Ataque':'🔥','Id':'ataque-fuego'}
	)

pokemones.push(charizard,blastoide,venusaur)
console.log(pokemones)
iniciarJuego()

function iniciarJuego(){
	seleccionarAtaque.style.display='none'
	verMapa.style.display='none'

	pokemones.forEach((pokemon) => {
        opcionDePokemones = `
        <input type="radio" name="mascota" id=${pokemon.nombre}/>
        <label class="pokemones" for=${pokemon.nombre}>
            <p>${pokemon.nombre}</p>
            <img src=${pokemon.imagen} alt=${pokemon.nombre}>
        </label>
        `
    contenedorDeTarjetas.innerHTML += opcionDePokemones

	inputBlastoide=document.getElementById('Blastoide')
	inputCharizard=document.getElementById('Charizard')
	inputVenusaur=document.getElementById('Venusaur')
	})
	botonSeleccionar.addEventListener('click',seleccionarMascotaJugador)
}

function seleccionarMascotaJugador(){
	if(inputBlastoide.checked){
		mascotaJugador.innerHTML=inputBlastoide.id
		eleccionMascotaJugador=inputBlastoide.id
	}else if(inputCharizard.checked){
		mascotaJugador.innerHTML=inputCharizard.id
		eleccionMascotaJugador=inputCharizard.id
	}else if(inputVenusaur.checked){
		mascotaJugador.innerHTML=inputVenusaur.id
		eleccionMascotaJugador=inputVenusaur.id
	}else{
		alert('Selecciona una mascota')
		return
	}
	seleccionarMascota.style.display='none'
	
	extraerAtaques(mascotaJugador)
	verMapa.style.display='flex'
	iniciarMapa()
}
