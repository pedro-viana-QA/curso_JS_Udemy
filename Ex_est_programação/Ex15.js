let divisoes = 0
let num = Math.floor(Math.random() * 100)
console.log(num)
let cont

for(cont = 1; cont <= num; cont++){
    if(num % cont == 0){
        divisoes++
        console.log(divisoes)
    }
}

if(divisoes == 2){
    console.log("O numero é primo")
}else{
    console.log("O numero não é primo")
}