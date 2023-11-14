import { useState } from "react";
import { useNavigate } from "react-router-dom";
const API = import.meta.env.VITE_BASE_URL;

const New = () => {
  const navigate = useNavigate();

  const [character, setCharacter] = useState({
    name: "",
    bounty: "",
    crew: "",
    poster_image: "",
    has_power: false,
  });

  const handleTextChange = (event) => {
    setCharacter({ ...character, [event.target.id]: event.target.value });
  };

  const handleCheckboxChange = () => {
    setCharacter({ ...character, has_power: !character.has_power });
  };

  const addCharacter = () => {
    const httpOptions = {
        method: "POST",
        body: JSON.stringify(character),
        headers: {
            "Content-type": "application/json"
        },
    };
    fetch(`${API}/characters`, httpOptions)
    .then(() => {
        alert(`${character.name} was added to the bounty board!`)
        navigate('/characters')
    })
    .catch((error) => console.error(error))
  }

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
        <input
          id="crew"
          type="text"
          value={character.crew}
          placeholder="crew Name"
          onChange={handleTextChange}
        />
        <label htmlFor="poster_image">Character Image URL:</label>
        <input
          id="poster_image"
          type="text"
          pattern="http[s]*://.+"
          value={character.poster_image}
          onChange={handleTextChange}
          placeholder="http://"
        />
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
