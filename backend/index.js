const express = require("express")
const cors = require("cors")

const products = require("./products")

const app = express()

app.use(express.json())
app.use(cors())

app.get("/api", (request, response) =>{
    response.send("NODE API IS WORKING!")
})

app.get("/api/products", (request, response) =>{
    response.send(products)
})

const port = process.env.PORT || 5000

app.listen(port, console.log(`Port ${port} backend server`))