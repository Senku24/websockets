import { WebSocketServer} from "ws";

const wss = new WebSocketServer({ port: 8080 });

// event handler for new connections
wss.on("connection", function(socket){
    console.log("new connection established");
  
    socket.on("message", function(message){
        console.log("received: " + message);
        if(message.toString() === "ping"){
            socket.send("pong");
        }
    })
})
