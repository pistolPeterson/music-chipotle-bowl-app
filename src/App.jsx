import { Divider, SaltProviderNext } from '@salt-ds/core';
import React, { useEffect, useState } from 'react';
import './App.css';

import { MealTitle } from './features/meal-title/MealTitle.jsx';
import PreviousOrders from './features/previous-orders/PreviousOrders.jsx';
import MusicReferenceForm from './features/music-form/MusicReferenceForm.jsx';
import Header from './features/header/Header.jsx';
import Footer from './features/footer/Footer.jsx';
import ConfirmPanel from './features/confirm-panel/ConfirmPanel.jsx';

// TODO:
// add feature keeping track of all the mutliselects error states, to disable the button
//      make confitm panel show the selections
// - API call to save orders
// - Save/load orders to/from localStorage
// - Prompt engineering
// understand the SALT ui uncointrolled error message
// - Write unit test

function App() {
  const [footerOptions, setFooterOptions] = useState({
    isButtonDisabled: false,
    descriptionText: null,
  });
  const [isPanelOpened, setIsPanelOpened] = useState(false);
  const [musicReferenceFormData, setMusicReferenceFormData] = useState([]);

  const handleValidationError = (isError) => {
    setFooterOptions((prevOptions) => ({
      ...prevOptions,
      isButtonDisabled: isError,
      descriptionText: isError
        ? 'There is an error in your selection. Please fix it.'
        : null,
    }));
  };

  const onFormSubmit = () => {
    console.log('Form submitted!');
    setIsPanelOpened(true);
  };

  const handleSelectionUpdate = (updatedLabel, selectedItems) => {
    setMusicReferenceFormData((prevData) => {
      // Filter out all previous items with the specific updatedLabel
      const filteredData = prevData.filter(
        (item) => item.label !== updatedLabel,
      );

      // Add the new selections for this label (selectedItems might be empty if deselected)
      const updatedData = [...filteredData, ...selectedItems];

      const uniqueData = updatedData.filter(
        (item, index, self) =>
          index ===
          self.findIndex(
            (t) => t.label === item.label && t.value === item.value,
          ),
      );

      return uniqueData; // Return the new state
    });
  };

  useEffect(() => {
    console.log('Music Form ', musicReferenceFormData);
  }, [musicReferenceFormData]);
  return (
    <div>
      <Header />
      <main className="main-container">
        <MealTitle />
        <Divider />
        <div className="order-content">
          <PreviousOrders />
          <MusicReferenceForm
            handleValidationError={handleValidationError}
            onSelectionUpdate={handleSelectionUpdate}
          />
        </div>
      </main>
      <Footer
        isButtonDisabled={footerOptions.isButtonDisabled}
        descriptionText={footerOptions.descriptionText}
        onFormSubmit={onFormSubmit}
      />
      <ConfirmPanel
        IsPanelOpened={isPanelOpened}
        onUserClosePanel={() => {
          setIsPanelOpened(false);
        }}
      />
    </div>
  );
}

export default App;
