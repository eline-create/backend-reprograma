const input = require("readline-sync")


const nota1 = input.question('valor um: ')
const nota2 = input.question('valor dois: ')
const nota3 = input.question('valor tres: ')
const nota4 = input.question('valor quatro: ')
const nota5 = input.question('valor cinco: ')
const nota6 = input.question('valor seis: ')

const total = parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3) + parseFloat(nota4) + parseFloat(nota5) + parseFloat(nota6)

const media = total/6

console.log(total.toFixed(2))

console.log(media.toFixed(2))

if (media >= 7) {
    console.log("Uhuuuu!!!!Aprovada!!!")
}
else if (media >=5 && media <7) {
   console.log("Estude para a recuperação!!")
}
  else if (media < 5) {
    console.log ("Reprovada =(")
  }
    
