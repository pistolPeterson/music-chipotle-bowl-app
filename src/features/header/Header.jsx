import React, { useState } from 'react';
import './header.css';
import { Divider, FlexItem, FlexLayout } from '@salt-ds/core';
import logoIcon from '../../assets/listen.png';
import githubIcon from '../../assets/github.png';
import audioPortfolioIcon from '../../assets/audio_portfolio.png';
import linkedinIcon from '../../assets/linkedin.png';
import {
  githubLink,
  linkedinLink,
  portfolioLink,
} from '../../constants/constants';
const Header = ({ exampleProp }) => {
  // const [state, setState] = useState(null);

  const iconsData = [
    { image: githubIcon, link: githubLink },
    { image: audioPortfolioIcon, link: portfolioLink },
    { image: linkedinIcon, link: linkedinLink },
  ];

  const icons = iconsData.map((item, index) => (
    <div className="header-right-element" key={item.link}>
      <a href={item.link} target="_blank">
        <img className="logo-img" src={item.image} />
      </a>
    </div>
  ));

  return (
    <div>
      <div className="header">
        <div className="header-left">
          <a href="#default" className="logo">
            <img
              className="logo-img"
              src={logoIcon}
              alt="Icon representing Linkedin, a social media site"
            />
            <div className="header-left-text">Pete Audio Tools</div>
          </a>
        </div>

        <div className="header-right">{icons}</div>
      </div>
      <Divider variant="teriary"></Divider>
    </div>
  );
};

export default Header;
