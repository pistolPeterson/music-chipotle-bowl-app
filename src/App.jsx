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
// - Add new confirmation panel
//     handle multople selections
//      make confitm panel show the selections
// - API call to save orders
// - Save/load orders to/from localStorage
// - Prompt engineering
// - Write unit test
// - rest ofc multiselect

function App() {
  const [footerOptions, setFooterOptions] = useState({
    isButtonDisabled: false,
    descriptionText: null,
  });
  const [isPanelOpened, setIsPanelOpened] = useState(false);
  const [hasValidationError, setHasValidationError] = useState(false);
  const [musicReferenceFormData, setMusicReferenceFormData] = useState([]);
  const handleValidationError = (isError) => {
    setHasValidationError(isError);
    setFooterOptions((prevOptions) => ({
      ...prevOptions,
      descriptionText: isError
        ? 'There is an error in your selection. Please fix it.'
        : null,
    }));
  };

  const onFormSubmit = () => {
    // Handle form submission logic here
    // For example, you can call an API to save the order or show a confirmation panel
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

      // This uniqueness filter might still be good practice, though less critical now
      // that we remove all previous items for the specific label.
      const uniqueData = updatedData.filter(
        (item, index, self) =>
          index ===
          self.findIndex(
            (t) => t.label === item.label && t.value === item.value,
          ),
      );

      // Log the state *inside* the state update function for clarity
      console.log(`Updating data for "${updatedLabel}":`, uniqueData);

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
