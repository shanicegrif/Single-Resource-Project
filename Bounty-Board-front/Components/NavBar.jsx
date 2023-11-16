import React from 'react';

const NavBar = () => {
  return (
    <nav style={navStyle}>
      <div style={titleContainerStyle}>
        <h1 style={titleStyle}>Bounty Board</h1>
      </div>
      <img src = {('../resources/BountyBoard.png')}></img>
    </nav>
  );
};

const navStyle = {
  backgroundColor: '#333',
  padding: '10px',
  textAlign: 'center',
};

const titleContainerStyle = {
  maxWidth: '800px',
  margin: '0 auto',
};

const titleStyle = {
  color: 'white',
  margin: '0',
};

export default NavBar;
