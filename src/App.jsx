import { Divider, SaltProviderNext } from '@salt-ds/core';
import React, { useState } from 'react';
import './App.css';

import { MealTitle } from './features/meal-title/MealTitle.jsx';
import PreviousOrders from './features/previous-orders/PreviousOrders.jsx';
import MusicReferenceForm from './features/music-form/MusicReferenceForm.jsx';
import Header from './features/header/Header.jsx';
import Footer from './features/footer/Footer.jsx';
import ConfirmPanel from './features/confirm-panel/ConfirmPanel.jsx';

// TODO:
// - Add new confirmation panel
// - API call to save orders
// - Save/load orders to/from localStorage
// - Prompt engineering
// - Write unit test
// - rest ofc multiselect

function App() {
  const [footerOptions, setFooterOptions] = useState({
    isButtonDisabled: true,
    descriptionText: null,
  });

  const [hasValidationError, setHasValidationError] = useState(false);

  const handleValidationError = (isError) => {
    setHasValidationError(isError);
    setFooterOptions((prevOptions) => ({
      ...prevOptions,
      descriptionText: isError
        ? 'There is an error in your selection. Please fix it.'
        : null,
    }));
  };

  return (
    <div>
      <Header />
      <main className="main-container">
        <MealTitle />
        <Divider />
        <div className="order-content">
          <PreviousOrders />
          <MusicReferenceForm handleValidationError={handleValidationError} />
        </div>
      </main>
      <Footer
        isButtonDisabled={footerOptions.isButtonDisabled}
        descriptionText={footerOptions.descriptionText}
      />
      <ConfirmPanel />
    </div>
  );
}

export default App;
