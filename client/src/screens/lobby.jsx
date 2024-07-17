import React, { useState, useCallback, useEffect } from "react";

import { useNavigate } from "react-router-dom";
import { useSocket } from "../context/socketprovider";

const Lobby=()=> {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [room, setRoom] = useState("");
  const socket = useSocket();

  const handlesubmit = useCallback(
    (e) => {
      e.preventDefault();
      socket.emit("room:join", { email, room });
    },
    [email, room]
  );
   const handleJoinRoom = useCallback((data) => {
     const { email, room } = data;
      
      navigate('/room/${room}');
   },[socket,navigate]);
  
   useEffect(() => {
   
    socket.on("room:joined", handleJoinRoom);
    return () => {
      socket.off("room:joined", handleJoinRoom);
    };
  }, [socket,handleJoinRoom]);

 return (
    <div className="lobby">
      <h1>This is Lobby</h1>
      <form onSubmit={handlesubmit}>
        <label htmlFor="email">Email Id</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <label htmlFor="room">Room</label>
        <input
          type="text"
          id="room"
          value={room}
          onChange={(e) => setRoom(e.target.value)}
        />
        <br />
        <button type="submit">join</button>
      </form>
    </div>
  );
}

export default Lobby;
