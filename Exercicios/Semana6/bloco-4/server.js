//require serve para importar qualquer modulo. Um criado ou já existente.
// O http está disponível através do Node.

const http = require('http');

// const server = http.createServer((req, res) => {
//     console.log('Requisição realizada')
// })

//Vendo tudo no console. Lembrar de abrir a página com o localhost3000 sempre!

// const server = http.createServer((req, res) => {
//     console.log(req.url, req.method)
// })

//Enxergando a resposta na página

const server = http.createServer((req, res) => {
    //console.log(req)
    //enviar resposta
    res.setHeader('Content-Type', 'text/html')
    res.write('<h1> Olá, Pepoull</h1>')
    res.end();
})




server.listen(3000, 'localhost', () => {
    console.log('Servidor rodando na porta 3000')
})

//Roda no Node
//Rodou : Servidor rodando na porta 3000?
// Agora vai lá numa pagina do Chrome e escreve localhost:3000
//Agora vê o que tem no teu terminal

// Sobre portas : https://en.wikipedia.org/wiki/List_of_TCP_and_UDP_port_numbers
