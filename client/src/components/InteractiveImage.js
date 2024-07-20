import React, { useEffect } from 'react';

const InteractiveImage = () => {
  useEffect(() => {
    // Redirect to the external URL when the component mounts
    window.location.href = 'https://view.genially.com/669b6242079a5f2933e0d91b/mobile-spaceship-quiz-mobile';
  }, []);

  return null; // This component does not render anything
};

export default InteractiveImage;
