const input = require("readline-sync")

// **Você pode dar os nomes que quiser para as funções e variáveis, apenas lembre que eles devem ser semânticos :)

// 1) crie uma função para cada uma das operações básicas (soma, subtração, multiplicação e divisão), 
//cada uma delas recebendo 2 números como parâmetros e retornando o resultado



  function soma(numero1, numero2) {
    return numero1 + numero2
  }
  
  function subtracao(numero1, numero2) {
    return numero1 - numero2
  }
  
  function multiplicacao(numero1, numero2) {
    return numero1 * numero2
  }
  
  function divisao(numero1, numero2) {
    return numero1 / numero2
  }
  
  function operacoes(num1, num2, operacao) {
    switch (operacao) {
      case "soma":
        return num1 + num2
      case "subtracao":
        return num1 - num2
      case "multiplicacao":
        return num1 * num2
      case "divisao":
        return num1 / num2
      }
  }
//console.log (operacoes(4,5, "multiplicacao"))

  /*
  console.log(soma(2, 2))
  console.log(subtracao(4, 2))
  console.log(multiplicacao(4, 4))
  console.log(divisao(4, 2))
  console.log("CONSOLE LOG DA FUNCAO OPERAÇÕES", operacoes(2, 2, "subtracao"))


// 2) para esse exercício, as funções de multiplicação e divisão não devem aceitar valores iguais a 0 (zero). Adicione esta lógica nas funções.


function multiplicaSemZero(num1, num2) {
    if (num1 === 0 || num2 === 0) {
      return `não queremos zero`
    }
    return num1 * num2
  }
  
  console.log(multiplicaSemZero(4, 3))
  
  function divideSemZero(num1, num2) {
    if (num1 === 0 || num2 === 0) {
      return `não queremos zero`
    }
    return num1 / num2
  }
  
  console.log(divideSemZero(10, 2))
  
*/

// 3) crie uma função que chame qualquer uma das funções acima e imprima o resultado no formato de String. 
//Exemplo: "O resultado da operação é X" (sendo X o valor do resultado).

function calcular (a, b, calculo){
    //console.log ( "O resultado do calculo é:", operacoes (a,b,calculo))
}

//calcular(4,5,'multiplicacao')


// 4) utilizando as funções de soma e multiplicação dos exercícios anteriores, crie uma função 
//que resolva a conta 36325 * (9824 + 777).

function somaMultiplica(){
    return multiplicacao(36325, soma), soma(9824, 777)
}
//console.log (somaMultiplica())
  


// 5) crie uma função que receba dois números e gere outros dois números aleatórios com valores entre eles.
// Exemplo: uma função que receba (1, 100) deve gerar dois números aleatórios entre 1 e 100. Em seguida, 
//some estes números e devolva uma string com o resultado no formato: "a soma de [número aleatório] e [número aleatório] 
//é XXX". Você vai ter que pesquisar o método do JS para gerar números aleatórios, `Math.random()` e como utilizá-lo.

function aleatorio(a,b) {
 
 return Math.random(a+b)

}
//console.log ("A soma de a e b é:", aleatorio (0,100))



//Para que o número aleatório seja inteiro, devemos utilizar a função: 
  //function getRandomInt(min, max) {
  //min = Math.ceil(min);
  //max = Math.floor(max);
  //return Math.floor(Math.random() * (max - min)) + min;
//}


// 6) Crie uma função com as seguintes características:
// 1. A função deve receber 3 parâmetros
// 2. Se qualquer um dos três parâmetros não estiverem preenchidos, a função deve retornar a string: 
//"Preencha todos os valores corretamente!"
// 3. O retorno da função deve ser a multiplicação dos 3 parâmetros, somando `2` ao resultado da multiplicação.

function trio (a,b,c) {
  if (a === undefined || b === undefined || c === undefined)
  console.log ("Preencha todos os valores corretamente!")
    
   return (a*b*c) + 2
}

  console.log (trio(2, 2, 2))
  
        
         

// 7) Crie uma função com as seguintes características:
// 1. A função deve receber 3 parâmetros.
// 2. Se somente um argumento for passado, retorne o valor do argumento.
// 3. Se dois parâmetros forem passados, retorne a soma dos dois parâmetros.
// 4. Se todos os parâmetros forem passados, retorne a soma do primeiro com o segundo, e o resultado dividido pelo terceiro.
// 5. Se nenhum argumento for passado, retorne "não recebeu parâmetro"




// 8) crie uma função que receba uma string como parâmetro, e retorne essa mesma string invertida. 
//Por exemplo, recebendo "reprograma", vai retornar "amargorper". 
//Para isso, você vai ter que pesquisar como usar JavaScript para inverter uma string.


let frase = "Eu conseguirei codar";
let invertida = frase.split("").reverse().join("");
//console.log(invertida);


function inverterString(str) {
  var o = '';
  for (var i = str.length - 1; i >= 0; i--) {
      o += str[i];
  }
  return o;
}
//console.log(inverterString("Consiguirei Codar"));


// 9) agora que você já sabe reverter strings, crie uma função que receba uma string,
// verifique se é um palíndromo e retorne true ou false. Exemplo de palíndromo: "arara".

function isPalindromo(str) {
  x = str.split("").reverse().join("");
  return (x == str) ? true : false;
}
/*
console.log(isPalindromo('casa'));
console.log(isPalindromo('oborobo'));
console.log(isPalindromo('asa'));
console.log(isPalindromo('babab'));
console.log(isPalindromo('Frango'));
*/


// 10) crie uma função que receba duas strings como parâmetros e retorne a string com a maior quantidade de caracteres. 
//Por exemplo, se passarmos como parâmetro "banana" e "chocolate" a função deve retornar "chocolate"

//   let nom1 = banana
//   let nom2

// function duasPalavras (nom1, nom2){
// if (nom1.length > nom2.length)
// return ("Esta é a maior palavra")
// }
//     console.log(duasPalavras ("banana", "chocolate"))


// //Usar o length  str.length


// var x = 'Mozilla';
// var empty = '';

// console.log('Mozilla possui ' + x.length + ' unidades de código de comprimento');
// /* "Mozilla possui 7 unidades de código de comprimento" */

// console.log('A string vazia possui um comprimento de ' + empty.length);
// /* "A string vazia possui um comprimento de 0" */