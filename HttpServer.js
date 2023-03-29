const fs= require('fs');
const net =require('net');

function sendResponse(socket, file)
{
var data= fs.readFileSync(file,'utf-8');
var response =data;
var responseLength= response.length;
var a = "HTTP/1.1 200 OK\n";
a=a+"Content-Type: text/html\n"; 
a=a+`Content-Length: ${responseLength}\n`;
a=a+"\n";
a=a+response;
socket.write(a);
}

var httpServer= net.createServer(function(socket){
socket.on('data', function(data){
var request =data.toString();
var splits= request.split("\n");
var firstLine = splits[0];
var words = firstLine.split(" ");;
var requestPath = words[1];
console.log("Path : "+ requestPath);
if(path=="/")
{
sendResponse("index.html");
}
else sendResponse(path.substring(1));
}); //onData ends

socket.on('end', function(){
console.log('Connection closed from client side.');
}); //onEnd ends

socket.on('error', function(){
console.log("Some problem on client side");
}); //onError ends
});

httpServer.listen(8080,'localhost');
console.log("HTTP Server is ready: port 8080");