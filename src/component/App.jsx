import React from "react";
import Card from "./Card";
import emoji from "../emoji";

console.log(emoji)

function createCards(emojiTerm){
 return (
 <Card
 key={emojiTerm.id}
 emoji={emojiTerm.emoji}
 name={emojiTerm.name}
 desc={emojiTerm.meaning}
/>
 )
}



function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">

      {emoji.map(createCards)}

      
     
      </dl>
    </div>
  );
}

export default App;
