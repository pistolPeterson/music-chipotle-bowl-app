import React, { useState } from 'react';
import './mealTitle.css';
import image1 from '../../assets/music chipotle bowl.png';

export const MealTitle = ({ exampleProp = 'Default Value' }) => {
  // const [state, setState] = useState(null);

  //Use salt ui text field
  return (
    <div className="mealTitle">
      <div className="mealTitle-img">
        Image
        <img className="meal-img" src={image1} />
      </div>
      <div className="mealTitle-text-section">Text Section</div>
    </div>
  );
};

export default MealTitle;
