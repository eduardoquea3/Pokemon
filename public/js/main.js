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
let opcionPokemones
let inputCharizard,inputBlastoide,inputVenusaur
let eleccionMascotaJugador,eleccionMascotaEnemigo
let botonAgua,botonFuego,botonTierra,botones=[]
let ordenAjugador=[],ordenAenemigo=[]
let jugadorId = null
let intervalo
let ataquesMascotaEnemigo=[]
let ataquesMascotaJugador=[]

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

const random =(num)=> Math.round(Math.random()*num)

botonReiniciar.addEventListener('click',()=>{location.reload()})

iniciarJuego()

function iniciarJuego() {
	seleccionarAtaque.style.display='none'
	verMapa.style.display='none'

	pokemones.forEach((pokemon)=>{
		opcionPokemones=`
		<input type="radio" name="mascota" id=${pokemon.nombre}>
		<label class="mascota" for=${pokemon.nombre}>
		<p>${pokemon.nombre}</p>
		<img src=${pokemon.imagen} alt=${pokemon.nombre}>
		</label>
		`
		contenedorDeTarjetas.innerHTML += opcionPokemones
	})
	inputBlastoide=document.getElementById('Blastoide')
	inputCharizard=document.getElementById('Charizard')
	inputVenusaur=document.getElementById('Venusaur')
}

botonSeleccionar.addEventListener('click',e=>{
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
		alert('No elegiste ninguna mascota')
		return
	}
	seleccionMascotaEnemigo(eleccionMascotaJugador)
	
})


function seleccionMascotaEnemigo(eleccionMascotaJugador){
	eleccionMascotaEnemigo=random(pokemones.length-1)
	for (let i = 0; i < pokemones.length; i++) {
		if (eleccionMascotaEnemigo==i) {
			mascotaEnemigo.innerHTML=pokemones[i].nombre
			ataquesMascotaEnemigo=pokemones[i].ataques
		}
	}
	sacandoAtaquesMascota(eleccionMascotaJugador)
}

function sacandoAtaquesMascota(eleccionMascotaJugador){
	for(let i=0;i<pokemones.length;i++){
		if(eleccionMascotaJugador==pokemones[i].nombre){
			ataquesMascotaJugador=pokemones[i].ataques
		}
	}
	MostrarBotones(ataquesMascotaJugador)
}

function MostrarBotones(ataquesMascotaJugador){
	seleccionarMascota.style.display='none'
	seleccionarAtaque.style.display='flex'
	ataquesMascotaJugador.forEach((ataque)=>{
		let botonAtaque=`
		<button class="boton" id=${ataque.Id}>${ataque.Ataque}</button>
		`
		contenedorAtaques.innerHTML+=botonAtaque
	})
	botonAgua=document.getElementById('boton-agua')
	botonFuego=document.getElementById('boton-fuego')
	botonTierra=document.getElementById('boton-tierra')
	botones=document.querySelectorAll('.boton')

	secuenciaAtaque()
}

function secuenciaAtaque() {
    botones.forEach((boton)=>{
		boton.addEventListener('click',(e)=>{
		if (e.target.textContent === '🔥') {
			ordenAjugador.push('🔥')
			boton.style.background = '#5F6F94'   
			boton.disabled = true
		} else if (e.target.textContent === '💧') {
			ordenAjugador.push('💧')
			boton.style.background = '#5F6F94'
			boton.disabled = true
		} else {
			ordenAjugador.push('🌱')
			boton.style.background = '#5F6F94'
			boton.disabled = true
		}
		secuenciaEnemiga()
		})
	})
}

let i
function secuenciaEnemiga(){
	id=random(ataquesMascotaEnemigo.length-1)
	ordenAenemigo.push(ataquesMascotaEnemigo[id].Ataque)
	ataquesMascotaEnemigo.splice(id,1)
	if(ordenAenemigo.length==4){
		contenedorAtaques.style.display='none'
		combate()
	}
}

let victorias=0,derrotas=0,resultadoF

function combate(){
	for (let i = 0; i < ordenAjugador.length; i++) {
		if(ordenAjugador[i]==ordenAenemigo[i]){
			victorias=victorias
			derrotas=derrotas
		}else if((ordenAjugador[i]=='💧' && ordenAenemigo[i]=='🔥')||
		(ordenAjugador[i]=='🌱' && ordenAenemigo[i]=='💧')||
		(ordenAjugador[i]=='🔥' && ordenAenemigo[i]=='🌱')){
			victorias+=1
		}else{
			derrotas+=1
		}

		ataquesDelJugador.innerHTML+=ordenAjugador[i]
		ataquesDelEnemigo.innerHTML+=ordenAenemigo[i]
	}
	if(victorias<derrotas){
		resultadoF='Perdiste'
	}else if(victorias>derrotas){
		resultadoF='Ganaste'
	}else{
		resultadoF='Empataron'
	}

	resultado.innerHTML=resultadoF
	vidasJugador.innerHTML=victorias
	vidasEnemigo.innerHTML=derrotas
}
