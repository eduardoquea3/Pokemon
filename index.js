const express = require('express')
const app = express()

app.use(express.static('public'))
app.use(express.json())

const jugadores=[]
class Jugador{
    constructor(id){
        this.id = id
    }
}

app.get('/unirse',(req,res)=>{
    const id=`${Math.random()}`
    const jugador = new Jugador(id)

    jugadores.push(jugador)
    res.setHeader('Access-Control-Allow-Origin','*')
    res.send(id)
})

app.listen(3000,()=>{console.log('iniciado')})