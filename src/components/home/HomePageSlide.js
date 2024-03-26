
import React from 'react';

const HomePageSlide = ({ imageUrl, Text }) => {
  const slideStyle = {
    height: '100vh',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundImage: `url(${imageUrl})`,
  };

  return (
    <div style={slideStyle}>
      <div style={{ position: 'absolute', bottom: '20px', width: '100%', textAlign: 'center' }}>
      </div>
    </div>
  );
};

export default HomePageSlide;