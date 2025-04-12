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

//remove hardcoded values so far
//begin selectable card component! woo! hardcode values for now
//refactor card to take in data
//add feature that in dev it will render some cards
// selectable card will show a pop up system with text (has to read from the card selected)
//one multiselect genre
//header and footer
//new page -> confirm choices
//api call -> display on page, save to local storage, make prev orders read from local storage
//prompt engineering
//unit tests

const cardComponents = mockOrderData.map((item, index) => (
  <PeteCard key={index} title={item.title} date={item.date} text={item.text} />
));
const PreviousOrders = () => {
  return (
    <div>
      <div className="carousel-text">ORDER IT AGAIN</div>
      <Carousel
        className="carousel"
        renderButtonGroupOutside={true}
        responsive={CAROUSEL_RESPONSIVE_CONFIG}
      >
        {cardComponents}
      </Carousel>
    </div>
  );
};

export default PreviousOrders;
