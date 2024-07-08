import React,{useState,useCallback} from "react";
function Lobby() {
  const[email,setEmail]=useState("");
  const[room,setRoom]=useState("");
  const handlesubmit=useCallback((e)=>{
    e.preventDefault();
    console.log(email,room);
  },[]);
  return(
  <div className="lobby">
    <h1>This is Lobby</h1>
    <form onSubmit={handlesubmit}>
      <lebel htmlFor="email">Email Id</lebel>
      <input type="email" id="email"  value={email} onChange={(e)=>setEmail(e.target.value)}/>
      <br/>
      <lebel htmlFor="room">Room</lebel>
      <input type="text" id="room" value={room} onChange={(e)=>setRoom(e.target.value)}/>
      <br/>
      <button type="submit">join</button>
    </form>
  </div>
  );
}

export default Lobby;
