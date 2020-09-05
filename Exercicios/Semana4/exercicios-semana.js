// DESAFIO - validador de cartão de crédito

// Todos os números de cartão de crédito têm uma sequência que pode ser validada através de um algoritmo chamado 
// Algoritmo de Luhn.
// Para validar qualquer número de cartão de crédito (o padrão de 16 dígitos), siga os seguintes passos:

// 1. Retire o último dígito do número. Ele é o verificador;
// 2. Escreva os números na ordem inversa;
// 3. Multiplique os dígitos das casas ímpares por 2 e subtraia 9 de todos os resultados maiores que 9;
// 4. Some todos os números;
// 5. O dígito verificador (aquele do passo 1) é o número que você precisa somar a todos os outros números somados 
//para fazer a validação;
// 6. O número de cartão de crédito será válido caso o total (do passo 5) seja múltiplo de 10
// (ou seja, numero % 10 === 0)

// Números de cartões válidos para teste:

  // 5555666677778884
  // 5485755481460022
  // 5141331902596939
  // 5381579886310193
  // 5261400319746371


//1. Retirar o último dígito. Usar o (.pop)
                //    0  1  2  3  4  5  6  7  8  9  10 11 12 13 14 15
let cartaoCredito1 = [5, 5, 5, 5, 6, 6, 6, 6, 7, 7, 7, 7, 8, 8, 8, 4]
console.log(cartaoCredito1)
 
cartaoCredito1.pop();
console.log(cartaoCredito1);

// //2. Usando o método (.reverse)

cartaoCredito1.reverse();
console.log(cartaoCredito1)

// //3. Multiplicar os dígitos casas ímpares por 2 e subtrair 9 de todos os resultados > 9 (Guardando valores nas variáveis)

cartaoCredito1[0] = ((cartaoCredito1[0] * 2) - 9)
cartaoCredito1[2] = ((cartaoCredito1[2] * 2) - 9)
cartaoCredito1[4] = ((cartaoCredito1[4] * 2) - 9)
cartaoCredito1[6] = ((cartaoCredito1[6] * 2) - 9)
cartaoCredito1[8] = ((cartaoCredito1[8] * 2) - 9)
cartaoCredito1[10] = ((cartaoCredito1[10] * 2) - 9)
cartaoCredito1[12] = ((cartaoCredito1[12] * 2) - 9)
cartaoCredito1[14] = ((cartaoCredito1[14] * 2) - 9)
console.log(cartaoCredito1)


//4. Some todos os números

let total = 0;

for ( var i = 0; i < cartaoCredito1.length; i++ ){
   total += cartaoCredito1[i];
}
console.log(total);


//5. Resultado da somaD4 + (último número do cartão)

let res = total + 4
console.log(res)

//6. ResultadoD5 = (numero % 10 === 0)


if (res % 10 === 0){
  console.log("O número é válido")
}

///////////////////////

// DESAFIO - saudar clientes

// Escreva uma função chamada saudarCliente.
// Essa função deve receber um nome, verificar se ele existe na base de clientes e retornar uma saudação 
//com base em quantas vezes a cliente visitou um estabelecimento. 

// Consulte o objeto baseClientes abaixo. A saudação deve ser diferente, dependendo do nome da reserva.

// Caso 1 - Cliente desconhecida (o nome não está presente no objeto baseClientes)
// console.log(saudarCliente('Chiquinha')) // --> 'Olá, é a primeira vez por aqui?'

// Caso 2 - Cliente que visitou apenas uma vez (o valor de 'visitas' é 1)
// console.log(saudarCliente('Clotilde')) // --> 'Bem-vinda, Clotilde! Que bom que voltou!'

// Caso 3 - Cliente repetida: (o valor de 'visitas' é maior que 1)
// console.log(saudarCliente('Florinda')) // --> 'Bem-vinda mais uma vez, Florinda!'

// Notas:
// Sua função não deve alterar o objeto baseClientes para atualizar o número de visitas.
// Não codifique os dados exatos da amostra. Esta é uma má ideia:
// if (nomeCliente === 'Maria') {
//   // etc
// }


const baseClientes = {
  Clotilde: {
    visitas: 1,
  },
  Florinda: {
    visitas: 2,
  },
  Paty: {
    visitas: 3,
  },
} 


function saudarCliente(nome) {
  if (!baseClientes[nome]){
    console.log('Olá, é a primeira vez por aqui?')
      } else if(baseClientes[nome].visitas === 1){
    console.log('Bem-vinda! Que bom que voltou!') 

  }else if(baseClientes[nome].visitas > 1){
    console.log('Bem-vinda mais uma vez!')
  }
      
}

saudarCliente('Rachel')













