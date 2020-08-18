const input = require("readline-sync")


const nota1 = input.question('valor um')
const nota2 = input.question('valor dois')
const nota3 = input.question('valor tres')
const nota4 = input.question('valor quatro')
const nota5 = input.question('valor cinco')
const nota6 = input.question('valor seis')

const total = parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3) + parseFloat(nota4) + parseFloat(nota5) + parseFloat(nota6)
/*
const media = (parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3) + parseFloat(nota4) + parseFloat(nota5) + parseFloat(nota6))/6
*/
console.log(total.toFixed(2))