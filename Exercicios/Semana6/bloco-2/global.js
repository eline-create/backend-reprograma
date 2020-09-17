
// Criar uma const
// Atribuir à const uma função anônima(arrow function)


//Função Simples

const Olar = "Hello, World!"

function teste(){
console.log(Olar) 
}

teste()


// Usando Arrow Function


const eae = () => {
    console.log('Eae mundão');
}


eae();

// Por isso a Arrow Function, 
//para não usar uma função dentro de uma const
const ei = function oi() {
    console.log('Eae mundummmm');
}

ei();