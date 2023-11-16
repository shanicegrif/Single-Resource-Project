import { useState } from "react";
import { useNavigate } from "react-router-dom";
const API = import.meta.env.VITE_BASE_URL;

const New = () => {
  const navigate = useNavigate();

  const [character, setCharacter] = useState({
    name: "",
    bounty: "",
    crew: "",
    has_power: false,
  });

  const handleTextChange = (event) => {
    const { id, value } = event.target;

  const numericValue = id === "bounty" ? Number(value) : value;

  setCharacter({ ...character, [id]: numericValue });
  };

  const handleCheckboxChange = () => {
    setCharacter({ ...character, has_power: !character.has_power });
  };

  const addCharacter = () => {
    const httpOptions = {
      method: "POST",
      body: JSON.stringify(character),
      headers: {
        "Content-type": "application/json",
      },
    };
    fetch(`${API}/characters`, httpOptions)
      .then(() => {
        alert(`${character.name} was added to the bounty board!`);
        navigate("/characters");
      })
      .catch((error) => console.error(error));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addCharacter();
  };

  return (
    <div className="newCharacter">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          value={character.name}
          type="text"
          onChange={handleTextChange}
          placeholder="Name of Character"
          required
        />
        <label htmlFor="bounty">Bounty:</label>
        <input
          id="bounty"
          type="number"
          value={character.bounty}
          onChange={handleTextChange}
          placeholder="The Price of Their Head"
          required
        />
        
        <label htmlFor="crew">Crew:</label>
        <select id="crew" value={character.crew} onChange={handleTextChange}>
          <option value="">Select Crew</option>
          <option value="Straw Hats">Straw Hats</option>
          <option value="Blackbeard Pirates">Blackbeard Pirates</option>
          <option value="Big Mom Pirates">Big Mom Pirates</option>
          <option value="Beast Pirates">Beast Pirates</option>
          <option value="Donquixote Pirates">Donquixote Pirates</option>
        </select>

        <label htmlFor="has_power">Devil Fruit Power:</label>
        <input
          id="has_power"
          type="checkbox"
          onChange={handleCheckboxChange}
          checked={character.has_power}
        />
        <br />

        <button type="submit" className="newButton">
          Add Character
        </button>
      </form>
    </div>
  );
};

export default New;
