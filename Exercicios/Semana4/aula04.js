//Aula 04
//VER  Métodos de Array em: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array

// Usando o For clássico para entender Array


// Arrays



// //Objetos
// const objAluna ={


// }


// //Método que pede uma função callback

// const arrayIrmaos = objAluna.irmaos
// console.log (arrayIrmaos)

// for (let i = 0; i < arrayIrmaos.length; i++){
//     console.log(objAluna.irmaos[i].nomeCompleto)
// }

// for (let i = 0; i < arrayIrmaos.length; i++){
//     objAluna.irmaos[i].ehNerd = true
// }
// console.log (objAluna)


// //Método .map - outra forma de percorrer objetos. Funciona apenas em Arrays

// //Sintaxe do .map / forEach / reduce / filter / find
// const novaArray = objAluna.irmaos.map(function(elementoDaArray){
//     return elementoDaArray.nomeCompleto
// })

// console.log(novaArray)

// // Uma operação
// const novaArray = objAluna.irmaos.map(function(elementoDaArray){
//     if (elementoDaArray.nomeCompleto.length <= 5){
//         return elementoDaArray.nomeCompleto
//     }
// })

// console.log(novaArray)



// array_numeros = [5,2,10,4,9,1]
// console.log(array_numeros)
// array_numeros[0] = array_numeros[0] * 2
// console.log(array_numeros)

//1. Retirar o último dígito. Usar o (.pop)
                //    0  1  2  3  4  5  6  7  8  9  10 11 12 13 14 15
                let cartaoCredito1 = [5, 8, 9, 9, 1, 6, 1, 7, 7, 9, 4, 5, 7, 1, 4, 5]
                console.log(cartaoCredito1)
                 
                cartaoCredito1.pop();
                console.log(cartaoCredito1);
                
                //2. Usando o método (.reverse)
                
                cartaoCredito1.reverse();
                console.log(cartaoCredito1)
                
                //3. Multiplicar os dígitos casas ímpares por 2 e subtrair 9 de todos os resultados > 9 (Guardando valores nas variáveis)
                
                cartaoCredito1[0] = (cartaoCredito1[0] * 2)
                cartaoCredito1[2] = ((cartaoCredito1[2] * 2) - 9)
                cartaoCredito1[4] = (cartaoCredito1[4] * 2)
                cartaoCredito1[6] = ((cartaoCredito1[6] * 2) - 9)
                cartaoCredito1[8] = (cartaoCredito1[8] * 2) 
                cartaoCredito1[10] = (cartaoCredito1[10] * 2) 
                cartaoCredito1[12] = ((cartaoCredito1[12] * 2) - 9)
                cartaoCredito1[14] = ((cartaoCredito1[14] * 2) - 9)
                console.log(cartaoCredito1)
                
                
                //4. Some todos os números
                
                let total = 0;
                
                for ( var i = 0; i < cartaoCredito1.length; i++ ){
                   total += cartaoCredito1[i];
                }
                console.log(total);
                
                
                //5. Resultado da somaD4 + 4
                
                let res = total + 5
                console.log(res)
                
                //6. ResultadoD5 = (numero % 10 === 0)
                
                
                if (res % 10 === 0){
                  console.log("O número é válido")
                }




                for(let i = 0; i < cartaoInvertido.length; i++) {     
                  const arrayAuxiliar = [];    
                   if(i % 2 === 0) {      
                     // multiplicar por dois todos os indices do array pares      
                       const valorMultiplicado = cartaoInvertido[i]*2;          
                       if(valorMultiplicado > 9) {        
                          const valorSubtraido = valorMultiplicado - 9;
                           arrayAuxiliar.push(valorSubtraido);         // return valorSubtraido;     
                        } else {         arrayAuxiliar.push(valorMultiplicado);}    
                           console.log('auxiliar', arrayAuxiliar);} 
                        else {       arrayAuxiliar.push(cartaoInvertido[i]);}     
                        console.log('auxiliar',arrayAuxiliar)   
                          return arrayAuxiliar;}
                