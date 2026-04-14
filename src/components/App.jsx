import React, { useState, useEffect} from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [toys, setToys] = useState([]); 

  // fetch toys upon page load 
  useEffect(() => {
    fetch("http://localhost:3001/toys")
      .then((r) => r.json())
      .then((data) => setToys(data));
  }, []);

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  // handle like logic
  function handleLikeToy(id, newLikes) {
    fetch(`http://localhost:3001/toys/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ likes: newLikes }),
    })
      .then((r) => r.json())
      .then((updatedToy) => {
        const updatedArray = toys.map((toy) =>
          toy.id === id ? updatedToy : toy
        );
        setToys(updatedArray);
      });
  }

  // handle donate toys logic
  function handleDeleteToy(id) {
    fetch(`http://localhost:3001/toys/${id}`, { method: "DELETE" })
      .then(() => {
        const filteredToys = toys.filter((toy) => toy.id !== id);
        setToys(filteredToys);
      });
  }

  // handle add toy logic 
  function handleAddToy(newToy) {
    setToys([...toys, newToy]); 
  }

  return (
    <>
      <Header />
      {showForm ? <ToyForm  onAddToy={handleAddToy}/> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer 
        toys={toys}
        onLikeToy={handleLikeToy}
        onDeleteToy={handleDeleteToy}
      />
    </>
  );
}

export default App;
