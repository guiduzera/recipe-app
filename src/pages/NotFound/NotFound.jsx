import React from 'react';
import './NotFound.css';

function NotFound() {
  return (
    <div className="NotFound">
      <h1>Not Found</h1>
      <img
        src="https://cdn.cnn.com/cnnnext/dam/assets/200414152441-disheslead.jpg"
        alt="dishes"
      />
      <p>Sorry, could not find your meal, we gotta wash the dishes first!</p>
    </div>
  );
}

export default NotFound;
