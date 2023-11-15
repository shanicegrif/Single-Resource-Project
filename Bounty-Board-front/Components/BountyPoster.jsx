import React from 'react';
import "./BountyPoster.css";
import images from "../resources/images.js"
//221 x 330 base
//181 x 137 image size
  
const BountyPoster = ({name, bounty, crew, image}) => {

    return (
        <div className="bounty-poster">
            <div className ="head-image">
                <img src = {('../resources/wantedPoster.png')}></img>
            </div>
            <div className='info-on-image'>
                <img src = {images.name}/>
                <h2>{name}</h2>
                <p>Reward: {bounty}</p>
                <p>Part Of {crew}</p>
            </div>
        </div>
    )
}

export default BountyPoster;
