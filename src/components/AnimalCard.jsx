const AnimalCard = ({ animal, deleteAnimal }) => {
  return (
    <div className="card">
      <img src={animal.image} alt={animal.name} />
      <h3>{animal.name}</h3>
      <p>{animal.type}</p>
      <p>{animal.location}</p>

      <button
        onClick={() => {
          if (window.confirm("Are you sure you want to delete?")) {
            deleteAnimal(animal.id);
          }
        }}
      >
        Delete ❌
      </button>
    </div>
  );
};

export default AnimalCard;