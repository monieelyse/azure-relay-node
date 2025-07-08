require('dotenv').config();
const WebSocket = require('hyco-ws');

const namespace = process.env.RELAY_NAMESPACE;
const path = process.env.RELAY_PATH;
const sasKeyName = process.env.RELAY_KEY_NAME;
const sasKey = process.env.RELAY_KEY;

const wss = WebSocket.createRelayedServer({
    server: WebSocket.createRelayListenUri(namespace, path),
    token: () => WebSocket.createRelayToken(
        WebSocket.createRelayListenUri(namespace, path),
        sasKeyName,
        sasKey
    )
}, (ws) => {
    console.log(">> Connection accepted");
    ws.on("message", msg => console.log("Received:", msg));
    ws.on("close", () => console.log("Connection closed"));
});

console.log("Listener ready and waiting…");
