import React, { useState } from "react";
import "./Animal.css";

const Animal = ({ zooName }) => {
  const [animals, setAnimals] = useState(["zebra", "slon", "žirafa", "tučňák"]);
  const [newAnimal, setNewAnimal] = useState("");

  const handleInputChange = (event) => {
    setNewAnimal(event.target.value);
    //console.log(event.target.value);
  };

  const handleAddAnimal = () => {
    if (newAnimal !== "") {
      setAnimals([...animals, newAnimal]);
      setNewAnimal("");
    }
  };

  const handleDeleteAnimals = () => {
    setAnimals([]);
  };

  return (
    <div className="animal-card">
      <h1>{zooName}</h1>
      {animals.length === 0 ? <p>This zoo is empty</p> : null}
      <ul className="animal-list">
        {animals.map((animal, index) => (
          <li
            key={index}
            onClick={() => console.log(animal)}
            className="animal-list-item"
          >
            {animal}
          </li>
        ))}
      </ul>
      <div>
        <input
          type="text"
          value={newAnimal}
          onChange={handleInputChange}
          className="animal-input"
        />
        <button onClick={handleAddAnimal} className="animal-button">
          Add Animal
        </button>
        <button onClick={handleDeleteAnimals} className="animal-delete-button">
          Delete all
        </button>
      </div>
    </div>
  );
};

export default Animal;
