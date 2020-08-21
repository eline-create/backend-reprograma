const input = require("readline-sync")

        // CALCULADORA DE MÉDIA //

const nota1 = input.question('valor um: ')
const nota2 = input.question('valor dois: ')
const nota3 = input.question('valor tres: ')
const nota4 = input.question('valor quatro: ')
const nota5 = input.question('valor cinco: ')
const nota6 = input.question('valor seis: ')

const total = parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3) + parseFloat(nota4) + parseFloat(nota5) + parseFloat(nota6)

const media = total/6

console.log(total.toFixed(2))

if (media > 7) {
        console.log ("Aprovada!!!")
} else if (media > 5 && media < 7) {
        console.log (" Mais uma chance.Estude para a recuperação!!!")
}
else if (media < 5) {
        console.log ("Não deu. Você não foi aprovado")
}


// Exemplo usando a função isNaN

let input1 = input.question ("Valor um: ")

if (isNaN (parseFloat (input))) {
        input1 = input.question ("Digite um número: ")
}


