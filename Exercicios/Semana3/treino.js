const input = require("readline-sync")

function dobro(x) {
    //console.log(x*2)
}

function outroDobro(x) {
    return 2*x
}

//let x = input.question ("Digite um número:")
//dobro(dobro (x))
//console.log(outroDobro(outroDobro(x)))


// Return pode ser usado para composição das funções.
// console.log é apenas para imprimir o valor, mas sem guarda para operações futuras.

//Entenda o que é função, com os exemplos a seguir:

//1. Função sem parâmetro, sem retorno
function olar () {
    console.log ('Olá, Pexual!')
}
//olar()

// o input.question fora do bloco tbm é contabilizado na função, caso você precise fazer um teste de funcionamento.

//2. Função com parâmetro, sem retorno

function olarPessoa(pessoa){
    //console.log (`Oi, ${pessoa}!`)
}
//olarPessoa ("Rachel")

//3. Função sem parâmetro, com retorno (Função dentro de função)
/*
function escreverOlar(){
    return 'Oi, Gente!'
}
function escreverOlarPraAlguem (nomePessoa){
    console.log (`${escreverOlar()} Meu nome é ${nomePessoa}`)
}

escreverOlarPraAlguem ('Rachel')
*/

//4. Função com mais de um parâmetro

function operacaoMatematica(numero1, numero2, numero3){

    return numero1 + numero2 + numero3
}
operacaoMatematica(1, 2, 3,) // Desta forma, a operação é executada, mas não é exibida no terminal.
//console.log (operacaoMatematica(1, 2, 3,)) // Assim, ela é exibida.


//Calculo com variáveis e resultado com texto

for (let i = 0; i <= 200; i=i+10){
    console.log('Quando a intensidade for  '+ i + '\ta tensão é ' + 100 * i)
}
 

// 1) Calcule a potência de 2 elevado a um número específico. Deve usar um loop (não usar `Math.pow()`).
// Exemplo:
// potenciaDeDois(10) // 1024

// Função de potencia

// function potenciaDeDois (potencia){
//     return 2 ** potencia
//     }

    // console.log(potenciaDeDois (2))
    // console.log(potenciaDeDois (3))
    // console.log(potenciaDeDois (4))
    // console.log(potenciaDeDois (5))
    // console.log(potenciaDeDois (6))
 
 // Colocando a função em loop

// for (let expoente = 2; expoente <= 15; expoente=expoente+2){
//     console.log(expoente, potenciaDeDois (expoente))
    
// }

// 2) Crie uma função que receba três números e determine se um número é maior que outro.
// Exemplo:
// retornaNumMaior(10, 20, 30) // 30


function numMaior2(num1, num2, num3){
    if (num1 >= num2 && num1 >= num3) {
       console.log(num1);
       return 
    }
       
    if (num2 >= num1 && num2 >= num3) {
       console.log(num2);
       return
    }
    if (num3 >= num1 && num3 >=num2) {
       console.log(num3)
       return 
    }   
}
numMaior(10, 20, 30)
// numMaior(10, 30, 20)
// numMaior(30, 20, 10)
// numMaior(20, 10, 30)
// numMaior(20, 30, 10)
// numMaior(30, 10, 20)
// numMaior(10, 10, 5)
// numMaior(10, 10, 10)


function numMaior3(num1, num2, num3){
    if (num1 >= num2 && num1 >= num3) {
       console.log(num1);
    }
    else if (num2 >= num1 && num2 >= num3) {
       console.log(num2);
    }
    else {
       console.log(num3)
    }   
}
function numMaior(num1, num2, num3){
    if (num1 > num2 && num1 > num3)
    console.log ('O maior número é:' + num1);
    if (num2 > num1)
     console.log('O maior número é:' + num2);
    if (num3 > num1 && num3 > num2)
    console.log('O maior número é:' + num3);
}
// console.log (numMaior (10,20,30))
  

// DESAFIOS!

// Crie uma função que determina se um número é primo e retorne true ou false conforme o caso. 
//Em matemática, um número primo é um número natural maior que 1 que é divisível somente por ele mesmo e 1.
// Utilize o operador módulo (`%`) para determinar se um número é divisível por outro.

// Crie uma função que conte o número de vogais em uma `string` e retorne o número de vogais. 
// Exemplo:
// function contaVogais("carro") // 2 

// var assert = require('assert');

// var contarVogais = function(palavra) {
//     var totalVogal = 0;
//     var vogais = ['a', 'e', 'i', 'o', 'u'];
//     var i;

//     for (i = 0; i < palavra.length; i++ ) {
//         if(vogais.indexOf(palavra[i]) != -1) {
//             totalVogal++;
//         }
//     }

//     return totalVogal;
// }




// Use estruturas de controle para inverter uma array de inteiros. 
//A função deverá receber uma array de números e retornar uma array com a ordem dos elementos invertida.
// Não é válido utilizar `arr.reverse()`.
// Exemplo:
// function inverteArray([1, 2, 3, 4]) // [4, 3, 2, 1]





function getVowels(str) {
    var vowelsCount = 0;
  
    //turn the input into a string
    var string = str.toString();
  
    //loop through the string
    for (var i = 0; i <= string.length-1 ; i++) {
  
    //if a vowel, add to vowel count
      if (string.charAt(i) == "a" || string.charAt(i) == "e" || string.charAt(i) == "i" || string.charAt(i) == "o" || string.charAt(i) == "u") {
        vowelsCount += 1;
      }
    }
    return vowelsCount;
  }
 //getVowels("Eline")  


