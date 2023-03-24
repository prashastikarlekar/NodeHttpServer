const net =require('net');
var httpServer= net.createServer(function(socket){
socket.on('data', function(data){
console.log(data.toString());
var response = "Welcome to HTTP Server version 1.0";
var responseLength= response.length;
var a = "HTTP/1.1 200 OK\n";
a=a+"Content-Type: text/html\n"; 
a=a+`Content-Length: ${responseLength}\n`;
a=a+"\n";
a=a+response;
socket.write(a);
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