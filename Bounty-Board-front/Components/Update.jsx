import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
const API = import.meta.env.VITE_BASE_URL;

const Update = () => {
  let { id } = useParams();
  const navigate = useNavigate();

  const [character, setCharacter] = useState({
    name: "",
    bounty: "",
    crew: "",
    has_power: false,
  });

  const handleTextChange = (event) => {
    setCharacter({ ...character, [event.target.id]: event.target.value });
  };

  const handleCheckboxChange = () => {
    setCharacter({ ...character, has_power: !character.has_power });
  };

  const updateCharacter = () => {
    const httpOptions = {
      method: "PUT",
      body: JSON.stringify(character),
      headers: {
        "Content-type": "application/json",
      },
    };
    fetch(`${API}/characters/${id}`, httpOptions)
      .then(() => {
        alert(`${character.name} has been updated!`);
        navigate(`/characters/${id}`);
      })
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    fetch(`${API}/characters/${id}`)
      .then((res) => res.json())
      .then((character) => {
        setCharacter(character);
      })
      .catch((error) => console.error(error));
  }, [id, navigate]);

  const handleSubmit = (event) => {
    event.preventDefault();
    updateCharacter();
  };

  return (
    <div className="updateCharacter">
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
          Update Character
        </button>
      </form>
      <Link to={`/characters/${id}`}>
        <button>Cancel</button>
      </Link>
    </div>
  );
};

export default Update;
