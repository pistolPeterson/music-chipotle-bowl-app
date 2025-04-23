import React, { useState } from 'react';
import './footer.css';
import { Button, Display4, Display3 } from '@salt-ds/core';
const Footer = ({ isButtonDisabled = false, descriptionText }) => {
  const defaultDescriptionText =
    "Hi my name is Pete, I'm a music producer and sound designer. ";

  return (
    <footer className="footer">
      <div className="footer-left">
        <Display3 className="footer-title">Your Music Bowl</Display3>
        <Display4 className="footer-description">
          {descriptionText ? descriptionText : defaultDescriptionText}
        </Display4>
      </div>
      <div className="footer-right">
        <Button
          sentiment="accented"
          className="footer-bttn"
          disabled={isButtonDisabled}
        >
          Get Your Reference!
        </Button>
      </div>
    </footer>
  );
};

export default Footer;
