import React, { useState } from 'react';
import { Button, Card, H3, StackLayout, Text } from '@salt-ds/core';
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogHeader,
  useId,
} from '@salt-ds/core';
import { CARD_WIDTH } from '../constants/constants';
function showOrderInfo() {
  console.log('Showing order info');
}

const PeteCard = ({ title, date = 'March 7, 2024', text }) => {
  const [open, setOpen] = useState(false);
  const id = useId();

  const handleRequestOpen = () => {
    setOpen(true);
  };

  const onOpenChange = (value) => {
    setOpen(value);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Card style={{ width: CARD_WIDTH }} accent="top">
        <StackLayout align="start">
          <StackLayout gap={1}>
            <H3>{title}</H3>
            <Text color="info">{date}</Text>
            <Text>{text}</Text>
          </StackLayout>
          <Button onClick={handleRequestOpen}>View References</Button>
        </StackLayout>
      </Card>
      <Dialog open={open} onOpenChange={onOpenChange} id={id}>
        <DialogHeader header="Terms and conditions" />
        <DialogContent style={{ maxHeight: 250 }}>
          <StackLayout>
            <H3>Adding Your Chase Card</H3>
          </StackLayout>
        </DialogContent>
        <DialogActions>
          <Button sentiment="accented" onClick={handleClose}>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default PeteCard;
