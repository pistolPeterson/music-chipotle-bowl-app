import React, { useState } from 'react';
import './mealTitle.css';
import image1 from '../../assets/music chipotle bowl.png';
import { Display1, Display2, Display3, Divider } from '@salt-ds/core';

export const MealTitle = ({ exampleProp = 'Default Value' }) => {
  // const [state, setState] = useState(null);

  //Use salt ui text field
  return (
    <div className="mealTitle">
      <div className="left-cont">
        <img className="meal-img" src={image1} />
      </div>
      <div className="right-cont">
        <Display2>Build Your</Display2>
        <br></br>
        <Display1>
          {' '}
          <strong>Music Bowl </strong>{' '}
        </Display1>
        <br></br>
        <br></br>
        <Display3>
          Select your instruments, moods and genres and get your custom made
          music references!
        </Display3>
      </div>
    </div>
  );
};

export default MealTitle;
