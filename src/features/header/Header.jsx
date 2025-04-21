import React from 'react';
import './header.css';
import { Divider } from '@salt-ds/core';
import logoIcon from '../../assets/listen.png';
import githubIcon from '../../assets/github.png';
import audioPortfolioIcon from '../../assets/audio_portfolio.png';
import linkedinIcon from '../../assets/linkedin.png';
import {
  GITHUB_LINK,
  LINKEDIN_LINK,
  PORTFOLIO_LINK,
} from '../../constants/constants';
const Header = () => {
  const iconsData = [
    { image: githubIcon, link: GITHUB_LINK },
    { image: audioPortfolioIcon, link: PORTFOLIO_LINK },
    { image: linkedinIcon, link: LINKEDIN_LINK },
  ];

  const icons = iconsData.map((item) => (
    <div className="header-right-element" key={item.link}>
      <a href={item.link} target="_blank" rel="noopener noreferrer">
        <img className="logo-img" src={item.image} />
      </a>
    </div>
  ));

  return (
    <div>
      <div className="header">
        <div className="header-left">
          <a href="/" className="logo">
            <img
              className="logo-img"
              src={logoIcon}
              alt="Pete Audio Tools Logo"
            />
            <div className="header-left-text">Pete Audio Tools</div>
          </a>
        </div>

        <div className="header-right">{icons}</div>
      </div>
      <Divider variant="tertiary"></Divider>
    </div>
  );
};

export default Header;
