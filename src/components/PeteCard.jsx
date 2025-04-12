import React, { useState } from 'react';
import { Button, Card, H3, StackLayout, Text } from '@salt-ds/core';
import { CARD_WIDTH } from '../constants/constants';
function showOrderInfo() {
  console.log('Showing order info');
}

const PeteCard = ({ title, date = 'March 7, 2024', text }) => {
  return (
    <Card style={{ width: CARD_WIDTH }} accent="top">
      <StackLayout align="start">
        <StackLayout gap={1}>
          <H3>{title}</H3>
          <Text color="info">{date}</Text>
          <Text>{text}</Text>
        </StackLayout>
        <Button onClick={showOrderInfo}>View References</Button>
      </StackLayout>
    </Card>
  );
};

export default PeteCard;
