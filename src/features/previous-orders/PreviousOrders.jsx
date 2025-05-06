import React, { useEffect, useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './previousOrders.css';
import {
  CAROUSEL_RESPONSIVE_CONFIG,
  LOCAL_STORAGE_KEY,
  mockOrderData,
} from '../../constants/constants.js';
import PeteCard from '../../components/PeteCard.jsx';
import PeteDialog from '../../components/PeteDialog.jsx';
import { useLocalStorage } from '../../hooks/useLocalStorage.jsx';
//const env = import.meta.env.VITE_ENV;
//const dataToUse = env === 'DEV' ? mockOrderData : getSavedCardComponents();

const PreviousOrders = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedCardData, setSelectedCardData] = useState(null);
  const [storedCards, setStoredCards] = useState([]);

  const { getItem, getAllLocalStorageKeys } =
    useLocalStorage('MUSIC_REFERNECES');

  const handleOpenDialog = (cardData) => {
    setSelectedCardData(cardData); // Store the data for the dialog
    setIsDialogOpen(true); // Open the dialog
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
    setSelectedCardData(null);
  };

  useEffect(() => {
    const keys = getAllLocalStorageKeys();
    const filteredKeys = keys.filter((key) =>
      key.startsWith(LOCAL_STORAGE_KEY),
    );
    console.log('All keys in localStorage: ', filteredKeys);

    const cardsFromStorage = filteredKeys.map((key, index) => {
      const data = getItem(key);
      return (
        <PeteCard
          key={index}
          date={'REVERsion in progress'}
          text={data}
          onViewMusicReferences={handleOpenDialog}
        />
      );
    });
    console.log('Cards from localStorage: ', cardsFromStorage);
    setStoredCards(cardsFromStorage);
  }, []);

  return (
    <div>
      <div className="carousel-text">ORDER IT AGAIN</div>
      <Carousel
        className="carousel"
        renderButtonGroupOutside={true}
        responsive={CAROUSEL_RESPONSIVE_CONFIG}
      >
        {storedCards}
      </Carousel>
      <PeteDialog
        open={isDialogOpen}
        onClose={handleCloseDialog}
        cardData={selectedCardData}
      />
    </div>
  );
};

export default PreviousOrders;
