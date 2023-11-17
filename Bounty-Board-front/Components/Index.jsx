import React, { useState, useEffect } from 'react';
import BountyPoster from './BountyPoster';
const API = import.meta.env.VITE_BASE_URL;

const Index = () => {
  const [allCharacters, setAllCharacters] = useState([]);
  const [crew, setCrew] = useState('Straw Hats');
  const [filteredCharacters, setFilteredCharacters] = useState([]);

  useEffect(() => {
    fetchCharacters();
  }, [crew]);

  const fetchCharacters = async () => {
    try {
      const response = await fetch(`${API}/characters`);
      const data = await response.json();
      setAllCharacters(data);
      filterCharacters(data, crew);
    } catch (error) {
      console.error('Error fetching characters: ', error);
    }
  };

  const handleCrewChange = newCrew => {
    setCrew(newCrew);
    filterCharacters(allCharacters, newCrew);
  };

  const filterCharacters = (characters, selectedCrew) => {
    const filtered = characters.filter(character => character.crew === selectedCrew);
    setFilteredCharacters(filtered);
  };

  return (
    <div className='character-list'>
      <h1>Crew: {crew}</h1>
      <div className='crewSelection'>
        <label>Select Crew: </label>
        <select value={crew} onChange={e => handleCrewChange(e.target.value)}>
          <option value="Straw Hats">Straw Hats</option>
          <option value="Blackbeard Pirates">Blackbeard Pirates</option>
          <option value="Big Mom Pirates">Big Mom Pirates</option>
          <option value="Beast Pirates">Beast Pirates</option>
          <option value="Donquixote Pirates">Donquixote Pirates</option>
        </select>
      </div>
      <div>
        {filteredCharacters.map(character => (
          <BountyPoster
            key={character.id}
            id={character.id}
            character = {character}
          />
        ))}
      </div>
    </div>
  );
};

export default Index;
