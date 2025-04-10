import React, { useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './previousOrders.css';

// TODO: remove clutter responsive data (search up js best practice for config data)
//css style the carousel
//Title text for prev orders
//begin selectable card component! woo! hardcode values for now
// see if carousel works with it
//refactor card to take in data
//add feature that in dev it will render some cards
// selectable card will show a pop up system with text (has to read from the card selected)
//one multiselect genre
//header and footer
//new page -> confirm choices
//api call -> display on page, save to local storage, make prev orders read from local storage
//prompt engineering
//unit tests

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const PreviousOrders = ({}) => {
  return (
    <>
      <div>Example Component, Previous Order huh </div>
      <Carousel responsive={responsive}>
        <div>Item 1</div>
        <div>Item 2</div>
        <div>Item 3</div>
        <div>Item 4</div>
      </Carousel>
    </>
  );
};

export default PreviousOrders;
