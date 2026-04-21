import { useState } from "react";
import AnimalCard from "./components/AnimalCard";
import AddAnimal from "./components/AddAnimal";
import Filter from "./components/Filter";
import animalsData from "./data";

function App() {
  const [animals, setAnimals] = useState(animalsData);
  const [filter, setFilter] = useState("");

  const addAnimal = (animal) => {
    setAnimals([...animals, animal]);
  };

  const deleteAnimal = (id) => {
    setAnimals(animals.filter((animal) => animal.id !== id));
  };

  const filteredAnimals = filter
    ? animals.filter((a) => a.type === filter)
    : animals;

  return (
    <div>
      <h1>Zoonest 🐾</h1>

      <Filter setFilter={setFilter} />
      <AddAnimal addAnimal={addAnimal} />

      {filteredAnimals.length === 0 ? (
        <p>No animals found 🐾</p>
      ) : (
        <div className="grid">
          {filteredAnimals.map((animal) => (
            <AnimalCard
              key={animal.id}
              animal={animal}
              deleteAnimal={deleteAnimal}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default App;