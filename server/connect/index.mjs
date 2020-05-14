import { v4 as getUniqueId } from 'uuid';

const liveConnections = [];
const publishedData = [];

function formatPublishData(data, type='data'){
    switch(type){
        case 'data':
            return `data:${JSON.stringify(data)}\n\n`;
        default:
            return `data:${JSON.stringify([])}\n\n`;
    }
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