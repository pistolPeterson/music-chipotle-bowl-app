import React, { useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './previousOrders.css';
import {
  CAROUSEL_RESPONSIVE_CONFIG,
  mockOrderData,
} from '../../constants/constants.js';
import { H1 } from '@salt-ds/core';
import PeteCard from '../../components/PeteCard.jsx';
import PeteDialog from '../../components/PeteDialog.jsx';

//one multiselect genre
//header and footer
//new page -> confirm choices
//api call -> display on page, save to local storage, make prev orders read from local storage
//prompt engineering
//unit tests

//const env = import.meta.env.VITE_ENV;
//const dataToUse = env === 'DEV' ? mockOrderData : getSavedCardComponents();

const PreviousOrders = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedCardData, setSelectedCardData] = useState(null);

  const handleOpenDialog = (cardData) => {
    setSelectedCardData(cardData); // Store the data for the dialog
    setIsDialogOpen(true); // Open the dialog
  };

  const cardComponents = mockOrderData.map((item, index) => (
    <PeteCard
      key={index}
      title={item.title}
      date={item.date}
      text={item.text}
      onViewMusicReferences={handleOpenDialog}
    />
  ));

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
    setSelectedCardData(null);
  };

  return (
    <div>
      <div className="carousel-text">ORDER IT AGAIN</div>
      <Carousel
        className="carousel"
        renderButtonGroupOutside={true}
        responsive={CAROUSEL_RESPONSIVE_CONFIG}
      >
        {cardComponents}
        <PeteDialog
          open={isDialogOpen}
          onClose={handleCloseDialog}
          cardData={selectedCardData}
        />
      </Carousel>
    </div>
  );
};

export default PreviousOrders;
