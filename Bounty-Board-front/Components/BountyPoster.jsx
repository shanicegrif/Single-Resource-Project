import React from "react";
import "./BountyPoster.css";
import images from "../src/resources/images.js";
import { Link } from "react-router-dom";

const BountyPoster = ({ character, id }) => {
  const { name, bounty, crew } = character;

  const foundNameImage = (name) => {
    if (name) {
      for (const key of Object.keys(images)) {
        if (name.toLowerCase().includes(key)) {
          return images[key];
        }
      }
    }
  };

  return (
    <div className="bounty-poster">
      <div className="head-image">
        <img src={"../src/resources/wantedPoster.png"}></img>
      </div>
      <div className="info-on-image">
        <img src={foundNameImage(name)} alt="Wanted Image" />
        <div className="showCharacterText">
          <h5>
            <Link to={`/characters/${id}`}>{name}</Link>
          </h5>
          <p>Reward: {bounty}</p>
          <p>Part Of: {crew}</p>
        </div>
      </div>
    </div>
  );
};

export default BountyPoster;
