import React, { useEffect, useState } from "react";
import BotsCollection from "./BotCollection";
import BotArmy from "./YourBotArmy";

function Display() {
  // State hook to manage the bots data
  let [bots, setBot] = useState([])
  //Effect hook to fetch data from the server when the component 
  useEffect(() => {

    fetch("http://localhost:3000/bots")
      .then((resp) => resp.json())
      .then(data => setBot(data))
  }, [])
  // Function to add a bot to the army
  let addBot= (bot)=>{
    setBot(bots.map((b)=>(b.id === bot.id ? {...b, army:true} : b)))
}
let removeBot =(bot)=>{
    setBot(bots.map((b)=>(b.id === bot.id ? {...b, army:false} : b)))
}
//Function to remove a bot from the army
let deleteBot = (bot)=>{
    let botRemoved =  bots.filter((b)=> b.id !==bot.id);
    setBot((bot)=>botRemoved)
}
  return (
    <div>
    <BotArmy
            bots={bots.filter((b)=>b.army)}
            removeBot={removeBot}
            deleteBot={deleteBot}
            
            />
 <BotsCollection 
            bots= {bots}
            addBot={addBot}
            deleteBot={deleteBot}
 />
 </div>
  )
}

export default Display;