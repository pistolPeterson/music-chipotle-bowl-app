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

// - Save/load orders to/from localStorage
// - Write unit tests

function App() {
  const [footerOptions, setFooterOptions] = useState({
    isButtonDisabled: false,
    descriptionText: null,
  });
  const [isPanelOpened, setIsPanelOpened] = useState(false);
  const [musicReferenceFormData, setMusicReferenceFormData] = useState([]);
  const [validationErrors, setValidationErrors] = useState({});

  const handleValidationError = (label, isError) => {
    setValidationErrors((prevErrors) => {
      const updatedErrors = { ...prevErrors, [label]: isError };

      const hasError = Object.values(updatedErrors).some((error) => error);

      setFooterOptions((prevOptions) => ({
        ...prevOptions,
        isButtonDisabled: hasError,
        descriptionText: hasError
          ? 'There is an error in your selection. Please fix it.'
          : null,
      }));

      return updatedErrors;
    });
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
        musicReferenceFormData={musicReferenceFormData}
        IsPanelOpened={isPanelOpened}
        onUserClosePanel={() => {
          setIsPanelOpened(false);
        }}
      />
    </div>
  );
}

export default App;
