import React, { useEffect, useCallback, useState } from "react";


import { useSocket } from "../context/socketprovider";
const RoomPage = () => {
  const socket=useSocket();
  const handleUserjoined = useCallback(({email,id})=>{
    console.log(`Email ${email} joined the room`);
  },[]);
  useEffect(()=> {
    socket.on('user:joined',handleUserjoined);
    return ()=>{
      socket.off('user:joined',handleUserjoined)
    }
  },[socket,handleUserjoined])
    return (

        <div>
          
            <h1>this is room</h1>
          
        </div>
      );
    };
    
    export default RoomPage;
