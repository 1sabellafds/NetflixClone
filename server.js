// importando

const express = require("express"); // criar o servidor local
const path = require("path") //importanto os caminhos - biblioteca que ja vem no node
const port = 3333

let initialPath = path.join(__dirname, "public") // pega o caminho atual e concatena com a pasta escolhida

let app = express() //Creates an Express application
app.use(express.static(initialPath)); // Criou o servidor para o initialpath da pasta public

//ROTAS

// Nessa rota está passando para o servidor que sempre que ele for chamado e não tiver nada depois da barra ("/")
// manda uma resposta enviando o arquivo initialfile que pertence a public
app.get("/", (req, res) =>{
    res.sendFile(path.join(initialPath, "index.html"))
});

// iniciar o servidor na porta e pegando o log dele.
app.listen(port, () =>{
    console.log(`Server ta funcionando caraii!! Na porta ${port}`)
    
})