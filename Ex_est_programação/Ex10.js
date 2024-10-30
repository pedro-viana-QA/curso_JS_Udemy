let velocidade = Math.round(Math.random() *100)
console.log(velocidade)
const limiteVelocidade = 60
if(velocidade > limiteVelocidade){
    console.log("Você está dirigindo acima do limite de velocidade")
}else{
    console.log("Você está dirigindo dento do limite de velocidade")
}
