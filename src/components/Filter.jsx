const Filter = ({ setFilter }) => {
  return (
    <select onChange={(e) => setFilter(e.target.value)}>
      <option value="">All</option>
      <option value="Mammal">Mammal</option>
      <option value="Bird">Bird</option>
      <option value="Reptile">Reptile</option>
    </select>
  );
};

export default Filter;