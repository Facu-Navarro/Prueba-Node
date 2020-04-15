// Modulos
const http = require('http');
const fs = require('fs');
const router = require('./router');


// Crear el Servidor
let server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    let respond = router(req.url);
    res.end(respond);

});

// Levantar el servidor
server.listen(3003, 'localhost', () => console.log('Server running in 3003 port'));