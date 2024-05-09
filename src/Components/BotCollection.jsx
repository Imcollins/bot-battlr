import React from "react";
import BotCard from "./BotCard";
//This component represents a collection of bot cards
function BotCollection({ bots, addBot, deleteBot }) {
  // Mapping over each bot to create BotCard components
  const botItem = bots.map((bot) => {
    return (
      <BotCard
        key={bot.id}
        bot={bot}
        clickEvent={addBot}
        deleteBot={deleteBot}
      />
    );
  });
  return (
    // Container for the collection of bot cards
    <div className="container mt-4">
      <div className="row">
      
        {botItem}
      </div>
    </div>
  );
}
//Exporting the BotCollection component
export default BotCollection; 