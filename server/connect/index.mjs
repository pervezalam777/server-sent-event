import { v4 as getUniqueId } from 'uuid';

let liveConnections = [];
const publishedData = [];

function formatPublishData(data, type='data'){
    switch(type){
        case 'data':
            return `data:${JSON.stringify(data)}\n\n`;
        case 'update':
            return `event:update\ndata:${JSON.stringify(data)}\n\n`;
        default:
            return `data:${JSON.stringify([])}\n\n`;
    }
}

function sendToAll(data, type='data'){
    const formatedData = formatPublishData(data, type);
    liveConnections.forEach(client => {
        client.res.write(formatedData)
    })
}

export default (req, res, next) => {
    const HEADER = {
        "Content-Type":"text/event-stream",
        "Connection": "keep-alive",
        "Cache-Control": "no-cache"
    }
    res.writeHead(200, HEADER);

    const data = formatPublishData(publishedData);
    res.write(data);

    const clientId = getUniqueId();
    liveConnections.push({
        id:clientId,
        res
    })
    console.log(`New connection established with id ${clientId}`);

    req.on('close', () => {
        console.log(`${clientId} connection closed`);
        liveConnections = liveConnections.filter(c => c.id !== clientId);
    })
}

export const addCountry = (data) => {
    try{
        publishedData.push(data);
        sendToAll(data);
        return true;
    } catch(e){
        return false;
    }
}

export const updateCountry = (data) => {
    let index = publishedData.findIndex(c => c.id === data.id);
    if(index != -1){
        publishedData[index] = data;
        sendToAll(data, 'update')
        return true;
    }
    return false;
}

