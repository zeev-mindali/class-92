//to which server we are going to connect
let wsURI = "ws://echo.websocket.org";

//create a new web socket connection to given uri
let webSocket = new WebSocket(wsURI);

//send message
webSocket.send("Hello world !!");

//handle events : onmessage , onerror, onopen, onclose

//what to do when we get a message
webSocket.onmessage = (event) => {
    console.log("event:\n", event);
    console.log("event data:\n", event.data);
}

//what to do when we get an error
webSocket.onerror = (event) => {
    console.log("Event error:\n", event)
}

//what to do when web socket is opened
webSocket.onopen = (event) => {
    console.log("web socket is opened");
    console.log("Event:\n", event);
}

//what to do when web socket is closed
webSocket.onclose = (event) => {
    console.log("web socket is closed");
    console.log("Event:\n", event);
}

//close the conneciton
webSocket.close();