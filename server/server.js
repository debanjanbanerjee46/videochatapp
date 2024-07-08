const{Server} =require("socket.io");
const io =new Server(8000,{cors:true});
//console.log("started");
io.on("connection",(socket)=>{
    console.log('socket connected',socket.id);
});
