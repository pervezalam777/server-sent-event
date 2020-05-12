const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

function eventsHandler(req, res, next){
    const HEADER = {
        'Content-Type': 'text/event-stream',
        'Connection': 'keep-alive',
        'Cache-Control': 'no-cache'
    }
    res.writeHead(200, HEADER);

    const data = `data: ${JSON.stringify(nests)}\n\n`;
    res.write(data);

    const clientId = Date.now();
    const client = {
        id: clientId,
        res
    }
    clients.push(client);
    console.log(`new connection established assigned id is ${clientId}`)

    req.on('close', () => {
        console.log(`${clientId} connection closed`);
        clients = clients.filter(c => c.id !== clientId);
    });
}

function sendEventsToAll(newNest){
    const data = `data: ${JSON.stringify(newNest)}\n\n`;
    clients.forEach(client => {
        client.res.write(data)
    })
}

async function addNest(req, res, next){
    const newNest = req.body;
    nests.push(newNest);
    res.json(newNest);
    return sendEventsToAll(newNest)
}

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false})) //...

app.post('/nest', addNest);
app.get('/events', eventsHandler);
app.get('/status', (req, res) => {
    res.json({connectedClients: clients.length})
})

let clients = [];
let nests = [];

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Application running on prot ${PORT}`));