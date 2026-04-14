import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({ toys, onLikeToy, onDeleteToy }) {
  return (
    // .map(): filters through toys array & returns Toycard array 
    <div id="toy-collection">
      {toys.map((toy) => (
        <ToyCard 
          key={toy.id} // key: DOM Ids changed, added or removed item 
          toy={toy} // sending data down to child compnent 
          onLikeToy={onLikeToy}
          onDeleteToy={onDeleteToy}
        />
      ))}
    </div>
  );
}

export default ToyContainer;
