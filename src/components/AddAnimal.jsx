import { useState } from "react";

const AddAnimal = ({ addAnimal }) => {
  const [form, setForm] = useState({
    name: "",
    type: "",
    location: "",
    image: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.type) {
      alert("Please fill required fields");
      return;
    }

    addAnimal({ ...form, id: Date.now() });

    setForm({ name: "", type: "", location: "", image: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Name"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />
      <input
        placeholder="Type"
        value={form.type}
        onChange={(e) => setForm({ ...form, type: e.target.value })}
      />
      <input
        placeholder="Location"
        value={form.location}
        onChange={(e) => setForm({ ...form, location: e.target.value })}
      />
      <input
        placeholder="Image URL"
        value={form.image}
        onChange={(e) => setForm({ ...form, image: e.target.value })}
      />

      <button type="submit">Add Animal ➕</button>
    </form>
  );
};

export default AddAnimal;