import React, { useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './previousOrders.css';
import {
  CAROUSEL_RESPONSIVE_CONFIG,
  mockOrderData,
} from '../../constants/constants.js';
import PeteCard from '../../components/PeteCard.jsx';
import PeteDialog from '../../components/PeteDialog.jsx';

//const env = import.meta.env.VITE_ENV;
//const dataToUse = env === 'DEV' ? mockOrderData : getSavedCardComponents();

const PreviousOrders = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedCardData, setSelectedCardData] = useState(null);

  const handleOpenDialog = (cardData) => {
    setSelectedCardData(cardData); // Store the data for the dialog
    setIsDialogOpen(true); // Open the dialog
  };

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
        {mockOrderData.map((item, index) => (
          <PeteCard
            key={index}
            title={item.title}
            date={item.date}
            text={item.text}
            onViewMusicReferences={handleOpenDialog}
          />
        ))}
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
