import React from "react";

function ToyCard({ toy, onLikeToy, onDeleteToy }) {
  
  const {id, name, image, likes} = toy; 

  function handleDeleteClick() {
    // call function from App.jsx via ToyContainer
    onDeleteToy(id); 
  }

  // function handle likes 
  // send ID & new like count (like +1) back up 
  function handleLikeClick() {
    onLikeToy(id, likes + 1); 
  }


  return (
    <div className="card" data-testid="toy-card">
      <h2>{name}</h2>
      <img
        src={image}
        alt={name}
        className="toy-avatar"
      />
      <p>{likes} Likes </p>
      <button className="like-btn" onClick={handleLikeClick}>
        Like {"<3"}
      </button>
      <button className="del-btn" onClick={handleDeleteClick}>Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
