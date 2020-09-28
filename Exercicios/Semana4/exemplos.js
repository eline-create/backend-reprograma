// DICAS DE DEBUGAGEM PRA VIDA
// sempre verificar o que a função espera receber
// verificar colchetes, parênteses e chaves
// ler os erros - encontrar a linha
// sempre verificar o que os MÉTODOS/funções retornam
// sempre pensar nas """substituições""" das variáveis pelos valores que estão dentro delas
// sempre verificar o que estamos recebendo em uma variável pra ver se é o que esperamos


// JSON versus XML

/* <p>Com o JSON é possível criar estrutura de dados mais complexos</p>
<p> Objetos = {} . Pode ser visto como (chave: {}). Para guardar uma cadeia de dados de várias pessoas, por exemplo, esse é o ideal
   ; e Arrays = [] - Lista ordenada de elementos. Boa para guardar lista de elementos de mesmas características</p> */


//               0   1    2   3    4  5  // índice/posição
const numeros = [65, 842, 89, 789, 6, 9] //cada elemento
                    
for (let i = 0; i < numeros.length; i++) {
//             i: número do índice       nomeDaArray[i]: elemento
  console.log(`índice: ${i}, elemento: ${numeros[i]}`)
}

//métodos de array
const indiceDaArray = numeros.indexOf(789)
console.log(indiceDaArray)

//push para "empurrar" elementos pra dentro de uma array
const arrayNumeros = []
for (let i = 0; i <= 10; i++) {
  arrayNumeros.push(`índice ${i}`)
}
console.log(arrayNumeros)

// OBJETOS

const alunasOn7 = [
  { nome: "Juliana", idade: 39, pets: ["Satanás", "Churrumina"] },
  { nome: "Helena", idade: 28, pets: ["gato 1", "gato 2"] },
  { nome: "Carla", idade: 35, pets: ["Risoto"] }
]

const objAluna = { 
  nome: "Juliana",
  idade: 39,
  pets: ["Satanás", "Churrumina"],
  irmaos: [{ nomeCompleto: "Roberta" }, { nomeCompleto: "Mauro" }], // array de objetos
  cidade: {
    nome: "São Paulo",
    bairro: "Pinheiros"
  },
}

console.log('oioioioio', objAluna.cidade.nome) //Aqui acessa o nome da Cidade. Quando você sabe o nome das chaves
console.log('oioioioio', objAluna['nome'])

// Dá erro pq tem uma Array, dentro da chave
//console.log('oioioioio', objAluna.irmaos.nomeCompleto) 
console.log('oioioioio', objAluna.irmaos[0].nomeCompleto) // Quem está no índice zero

// como acessar uma array de objetos e fazer modificações em cada um
for (let i = 0; i < objAluna.irmaos.length; i++) {
  objAluna.irmaos[i].ehNerd = true
}

// map, forEach: funções que precisam de funções dentro delas (callbacks)

// map SEMPRE retorna uma array de elementos
const novaArray = objAluna.irmaos.map(function(elementoDaArray) {
  return elementoDaArray.nomeCompleto
})
console.log(novaArray)

// forEach não retorna nada, só faz
objAluna.irmaos.forEach(function(elementoDaArray) {
  console.log(elementoDaArray.nomeCompleto)
})

//notação de ponto - Se eu conheço a chave
console.log(objAluna.idade)
//notação de colchete - Se eu não conheço o nome da chave
const variavel = 'idade'
console.log(objAluna[variavel])

// criando ou alterando chaves e valores de um objeto
// objetos têm propriedades/caracterísitcas
// objetos têm comportamentos
const objGato = {
  nome: "Satanás",
  miar: function(){    //É possível criar uma função dentro de um objeto
    return 'miau', `${nome}`
  }
}
console.log(objGato.miar())


// REVISÃO

// console.log(objGato) // Só com o nome do Gato


// objGato.pelagem = "vaquinha" //Essa chave não existe no objeto, mas ele é criado. Mas, se ele já existe, é substituído.
// console.log(objGato) // Com o nome e a pelagem


// objGato.pelagem = "branco e preto"
// console.log(objGato) // Substituiu a pelagem pela mais recente

const arr = [45, 67, 89]
arr.push(200)    //acrescentou um objeto na Array. O .push tbm é uma função.
console.log(arr)  // É possível criar funções dentros de um objeto. São os métodos.


// Chamando a função e o dado que ela quer calcular

function soma(num){
  return num + num
}

soma(50)

//Revisão de .map e .forEach (Servem para fazer loop em Array)

array.push(323) //empurrar algo para a Array
const ultimaCoisa = array.pop() // Guardar o elemento que foi retirado




const pokemons = 
[{
  id: 1,
  name: "Bulbasaur",
  type: [ "Grass", "Poison" ],
}, 
{
  id: 2,
  name: "Ivysaur",
  type: [ "Grass", "Poison" ],
}, 
{
  id: 4,
  name: "Charmander",
  type: [ "Fire" ],
}]

// Para acessar é preciso entrar nessa Array



const nomesPokemons = pokemons.map(function(pokemon) {
    listaNomes += `O pokemón ${pokemon.name} tem id ${pokemon.id}\n`
  })
console.log(listaNomes)

// Map sempre retorna uma Array. Mostrando que você pode colocar [i], chamar de "pokemon", é para nomear com algo que faça sentido.

const nomesPokemons = pokemons.map(function(i) {
  console.log('indice do map', i)
  return i.name
}

console.log(nomesPokemons)


// For Each


const nomesPokemons = pokemons.forEach(function(pokemon) {
    listaNomes += `O pokemón ${pokemon.name} tem id ${pokemon.id}\n`
  })
console.log(listaNomes)

//Alterando o nome

const nomesPokemons = pokemons.forEach(function(pokemon) {
  pokemon.name = "banana"
})
console.log(pokemons)

//Usando o For Clássico

// for (let i= 0; i < pokemons.length; i++){
//   console.log(pokemons[i].name)
//   console.log(`nome: ${pokemons[i].name}`)
// }


// https://sujeitoprogramador.com/javascript-aprendendo-tudo-sobre-arrow-functions/


// //a mesma coisa, com arrow function 
// let outraListaNomes = ''
// const nomesPokemonsArrow = pokemons.forEach(pokemon => outraListaNomes += `O pokemón ${pokemon.name} tem id ${pokemon.id}\n`)
// console.log(outraListaNomes)
