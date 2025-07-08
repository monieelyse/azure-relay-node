require('dotenv').config();
const WebSocket = require('hyco-ws');

const namespace = process.env.RELAY_NAMESPACE;
const path = process.env.RELAY_PATH;
const sasKeyName = process.env.RELAY_KEY_NAME;
const sasKey = process.env.RELAY_KEY;

const uri = WebSocket.createRelaySendUri(namespace, path);
const token = WebSocket.createRelayToken(uri, sasKeyName, sasKey);

WebSocket.relayedConnect(uri, token, (ws) => {
    console.log(">> Connected to relay");
    ws.send("Hello from the client!");
    ws.on("message", msg => console.log("Reply:", msg));
});
