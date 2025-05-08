import React from 'react';
import './footer.css';
import { Button, Display4, Display3 } from '@salt-ds/core';
const Footer = ({
  isButtonDisabled = false,
  descriptionText,
  onFormSubmit,
}) => {
  const defaultDescriptionText =
    'Start selecting your music references to get a personalized reference! You can only select up to 3 items per category.';
  const submitMusicReferenceForm = () => {
    onFormSubmit();
  };
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
          onClick={submitMusicReferenceForm}
        >
          Get Your Reference!
        </Button>
      </div>
    </footer>
  );
};

export default Footer;
