const{Server} =require("socket.io");
const io =new Server(8000,{cors:true});
//console.log("started");
const emailtosocketidmap =new Map();
const socketidtoemailmap =new Map();
io.on("connection",(socket)=>{
    //console.log('socket connected',socket.id);
    socket.on('room:join',data=>{
        const {email,room} =data;
        emailtosocketidmap.set(email,socket.id);
        socketidtoemailmap.set(socket.id,email);
        socket.join(room);
        io.to(room).emit("user:joined", { email, id: socket.id });
        io.to(socket.id).emit('room:joined',data);
    })
});
