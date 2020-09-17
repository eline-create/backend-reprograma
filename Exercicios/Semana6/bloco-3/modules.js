//Importar outro arquivo

//Modules e Require


//node bloco-3/modules.js


// const data = require('./pessoas');

// console.log(data); // imortanto tudo usando uma const que resuma


// console.log(data.pessoas); //Somente os dados de pessoas
// console.log(data.idades); // Somente os dados de idades

// console.log(data.pessoas, data.idades); // Duas arrays distintas

// //Importanto valores específicos descritos 
// //no module.exports do arquivo

// const {pessoas} = require('./pessoas'); //Importanto a Array específica. 
// //Considerando que o arquivos de dados tem outros dados disponíveis liberados.

const os = require('os'); // Exportanto de um terceiro

//console.log(os.homedir());
//console.log(os)
//https://nodejs.org/api/os.html
