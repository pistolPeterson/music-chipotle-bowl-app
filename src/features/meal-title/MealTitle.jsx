import React from 'react';
import './mealTitle.css';
import linkedinIcon from '../../assets/listen.png';
import { Display1, Display2, Display3 } from '@salt-ds/core';

export const MealTitle = () => {
  return (
    <div className="mealTitle">
      <div className="left-cont">
        <img
          className="meal-img"
          src={linkedinIcon}
          alt="Icon representing Linkedin, a social media site"
        />
      </div>
      <div className="right-cont">
        <Display2 className="right-cont-child">Build Your</Display2>
        <Display1 className="right-cont-child">
          <strong>MUSIC BOWL</strong>
        </Display1>
        <Display3 className="right-cont-child">
          Select your instruments, moods and genres and get your custom made
          music references!
        </Display3>
      </div>
    </div>
  );
};

export default MealTitle;
