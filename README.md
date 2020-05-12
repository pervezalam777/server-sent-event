# Server Sent Event
This example contains frontend and backend interaction for server sent event.

Server sent event is unidirectional communication from server to client. Client establish a connection with server using **EventSource** API.


## How to run
This application divided into three parts server, admin and client

Step 1: Open command window (cmd or terminal)
```bash
# go inside the server folder and run the following command
server> npm install
# then
server> node index.js
```

Step 2: Open another command window (cmd or terminal)
```bash
# go inside the client folder and run the following command
client> npm install
# then 
client> npm run start
```

Step 3: Open another command window (cmd or terminal)
```bash
# go inside the admin folder and run the following command
admin> npm install
# then
admin> npm run start
```

## SSE limitation
SSE suffers from a limitation to the maximum number of open connections, which can be specially painful when opening various tabs as the limit is per browser and set to a very low number (6). The issue has been marked as "Won't fix" in Chrome and Firefox. This limit is per browser + domain, so that means that you can open 6 SSE connections across all of the tabs to www.example1.com and another 6 SSE connections to www.example2.com. (from Stackoverflow)

## Reference
[Event Source](https://developer.mozilla.org/en-US/docs/Web/API/EventSource)
[StackOverFlow](https://stackoverflow.com/questions/5195452/websockets-vs-server-sent-events-eventsource/5326159#5326159)
[Server-Sent-Events in Nodejs](https://alligator.io/nodejs/server-sent-events-build-realtime-app/)