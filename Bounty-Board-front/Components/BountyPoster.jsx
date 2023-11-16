import React from "react";
import "./BountyPoster.css";
import images from "../resources/images.js";
import { Link } from "react-router-dom";
//221 x 330 base
//181 x 137 image size

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
        <img src={"../resources/wantedPoster.png"}></img>
      </div>
      <div className="info-on-image">
        <img src={foundNameImage(name)} alt="Wanted Image" />
        <h2>
          {" "}
          <Link to={`/characters/${id}`}>{name}</Link>
        </h2>
        <p>Reward: {bounty}</p>
        <p>Part Of: {crew}</p>
      </div>
    </div>
  );
};

export default BountyPoster;
