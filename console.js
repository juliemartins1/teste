console.log("quokka")
//tipagem dinâmica

//declaração e atribuição
//declaração
var x;//ponto-e-virgula é opcional
console.log(x)
//atribuição
x = 1
console.log(x)

var res = "aula"
console.log(res)
console.log(typeof(res))
res = 4.5
console.log(res)
console.log(typeof(res))

res=1

if(res==4.5){
    console.log("res é quatro ponto cinco")
}else if(res==1){
    console.log("res é um " )
}else {
console.log("o res é " + res )
}

switch(res){
    case 1:{
     console.log("res é um")
     break
    }
    case 2:{
        console.log("res é dois")   
        break
    }
    default:{
        console.log("res é: " + res)
    }
}
for(var cont = 0; cont < 5; cont++){
console.log(cont)
}
for(let cont = 0; cont < 5; cont++){
    console.log(cont)
    }
console.log(cont)
for( ;cont<10 ; ){
    console.log(cont++)
}
while(cont<20){
    console.log(cont++)
}
var e = 5
//pré-incremento e pós incremento
console.log(e++)
console.log(e)
console.log(++e)
console.log(e)
//array(vetor)
var nomes =["julie","Adriana","Guilherme","Kethelem"]
console.log(nomes)
console.log(nomes[1])
console.log(nomes[0])
console.log(nomes[2])

console.log(nomes.length)
console.log(nomes[nomes.length-1])

for(var i=0 ; i<nomes.length ; i++){
    console.log("nome " + nomes)
}
for(var nome of nomes){
    console.log("nome " + nome)
}

//for(String nome : nomes) <-java
// javaScript: fracamente tipada(concersão implicita)
var u=4
var p="v"
console.log(u+p)
console.log(u-p) //Not a Number(não é um número)

console.log(nomes[99])

