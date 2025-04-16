const http = require('http')
const fs = require('fs')
const path = require('path')
const port = 3000;

const server = http.createServer((req, res) => {
    let filePath = ""

    switch (req.url) {
        case "/index":
            filePath = "./index.html"
            break
        
        case "/about":
            filePath = "./pages/about.html"
            break
        
        case "/contact":
            filePath = "./pages/contact.html"
            break;
        
        default:
            filePath = "./pages/error.html"
    }

    fs.readFile(filePath, (err, content) => {
        if (err) {
        console.error("Error al leer el archivo:", err)
        res.writeHead(500, { "Content-Type": "text/html" })
        res.end("<h1>Error 500: Error interno del servidor</h1>")
        }   else {
            res.writeHead(200, { "Content-Type": "text/html" })
            res.end(content)
            }
    })
})

server.listen(port, () => {
    console.log("Servidor escuchando en http://localhost:${port}");
})