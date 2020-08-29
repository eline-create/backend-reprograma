const input = require("readline-sync")

// 1) Calcule a potência de 2 elevado a um número específico. Deve usar um loop (não usar `Math.pow()`).
// Exemplo: potenciaDeDois(10) // 1024

// Função de potencia

function potenciaDeDois (potencia){
    return 2 ** potencia
    }

    console.log(potenciaDeDois (2))
    console.log(potenciaDeDois (3))
    console.log(potenciaDeDois (4))
    console.log(potenciaDeDois (5))
    console.log(potenciaDeDois (6))
 
//Colocando a função em loop

for (let expoente = 2; expoente <= 15; expoente=expoente+2){
    console.log(expoente, potenciaDeDois (expoente))
    
}

// 2) Crie uma função que receba três números e determine se um número é maior que outro.
// Exemplo:retornaNumMaior(10, 20, 30) // 30

function numMaior(num1, num2, num3){
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

numMaior(10, 20, 30)
numMaior(10, 30, 20)
numMaior(30, 20, 10)
numMaior(20, 10, 30)
numMaior(20, 30, 10)
numMaior(30, 10, 20)
numMaior(10, 10, 5)
numMaior(10, 10, 10)

// DESAFIOS!

// D1. Crie uma função que determina se um número é primo e retorne true ou false conforme o caso. 
// Utilize o operador módulo (`%`) para determinar se um número é divisível por outro.

function ehPrimo(num){
    for (let i = 2; i < num; i++){
        if (num % i == 0)
        return false; {
           
        } return true

    }
}
 console.log(ehPrimo(3))
 console.log(ehPrimo(4))
 console.log(ehPrimo(5))
 console.log(ehPrimo(6))


// D2. Crie uma função que conte o número de vogais em uma `string` e retorne o número de vogais. 
// Exemplo: function contaVogais("carro") // 2 

    let palavra = "bicicleta"
    let totalVogais = 0

function asVogais() {

    for (let i = 0;  i <= palavra.length - 1; i++ ) {
        if (palavra.charAt(i) === "a" || palavra.charAt(i) === "e" || palavra.charAt(i) === "i" || palavra.charAt(i) === "o" || palavra.charAt(i) === "u") {
           console.log(totalVogais += 1);

        }
    }
}
          asVogais(palavra)



// D3. Use estruturas de controle para inverter uma array de inteiros. 
// A função deverá receber uma array de números e retornar uma array com a ordem dos elementos invertida.
// Não é válido utilizar `arr.reverse()`.
// Exemplo: function inverteArray([1, 2, 3, 4]) // [4, 3, 2, 1]
// (Não realizado)