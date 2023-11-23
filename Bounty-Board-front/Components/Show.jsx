import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import images from "../src/resources/images.js";
const API = import.meta.env.VITE_BASE_URL;

const Show = () => {
  const [character, setCharacter] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();
  const { name, bounty, crew, has_power } = character;

  const foundNameImage = (name) => {
    if (name) {
      for (const key of Object.keys(images)) {
        if (name.toLowerCase().includes(key)) {
          return images[key];
        }
      }
    }
  };

  useEffect(() => {
    fetch(`${API}/characters/${id}`)
      .then((res) => res.json())
      .then((character) => {
        setCharacter(character);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [id, navigate]);

  const handleDelete = () => {
    deleteCharacter();
  };

  const deleteCharacter = () => {
    const httpOptions = { method: "DELETE" };
    fetch(`${API}/characters/${id}`, httpOptions)
      .then(() => {
        alert(`${character.name} was deleted!`);
        navigate(`/characters`);
      })
      .catch((error) => console.log(error));
  };
  return (
    <div className="bounty-poster">
      <div className="head-image">
        <img src={"/src/resources/oneWantedPoster.png"}></img>
      </div>
      <div className="info-on-image">
        <img src={foundNameImage(name)} alt="Wanted Poster" />
        <div className="character-text">
          <p>{name}</p>
          <p>Reward: {bounty}</p>
          <p>Devil Fruit Power: {has_power ? "Yes" : "No"}</p>
        </div>
      </div>
      <div className="showCharacterNav">
        <div>
          <Link to={`/characters`}>
            <button>Cancel</button>
          </Link>
        </div>
        <div>
          <Link to={`/characters/${id}/edit`}>
            <button>Edit</button>
          </Link>
        </div>
        <button onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );
};

export default Show;
