const express = require('express');

const PORT = 8080;

const app = express();

app.use('/static', express.static(__dirname + '/static'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
})

app.get('/nosotros', (req, res) => {
    res.sendFile(__dirname + '/views/about.html');
})

app.get('/soluciones', (req, res) => {
    res.send('Page under construction')
})

app.listen(PORT, () => {
    console.log(`Website live at http://localhost:${PORT}`);
})