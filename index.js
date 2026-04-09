require("dotenv").config()

const express = require("express")
const cors = require("cors")

const app = express()

app.use(cors())

const PORT = process.env.PORT || 3000

app.get("/", (req, res) => {
    res.send("Servidor da escola rodando")
})

app.get("/info", (req, res) => {
    res.json({
        escola: process.env.ESCOLA,
        curso: process.env.CURSO,
        professor: process.env.PROFESSOR,
        ambiente: process.env.AMBIENTE
    })
})

app.get("/alunos", (req, res) => {
    res.json([
        { nome: "João" },
        { nome: "Maria" },
        { nome: "Pedro" }
    ])
})


app.get("/aluno", (req, res) => {
   res.json({
       nome: process.env.NOME,
       idade: process.env.IDADE,
       cidade:process.env.CIDADE
       
   })
})



app.listen(PORT, () => {
    console.log(`rodando em http://localhost:${PORT}`)
})

