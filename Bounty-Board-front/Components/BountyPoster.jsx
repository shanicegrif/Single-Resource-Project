import React from 'react';
import "./BountyPoster.css";
import images from "../resources/images.js"
//221 x 330 base
//181 x 137 image size
  
const BountyPoster = ({character}) => {
    const {name, bounty, crew, has_power} = character;

    const foundNmaeImage = (name) => {
        for( const key of Object.keys(images)) {
            if(name.toLowerCase().includes(key)) {
                return images[key]
            }
        }
    }

    return (
        <div className="bounty-poster">
            <div className ="head-image">
                <img src = {('../resources/wantedPoster.png')}></img>
            </div>
            <div className='info-on-image'>
                <img src={foundNmaeImage(name)}/>
                <h2>{name}</h2>
                <p>Reward: {bounty}</p>
                <p>Part Of {crew}</p>
            </div>
        </div>
    )
}

export default BountyPoster;
