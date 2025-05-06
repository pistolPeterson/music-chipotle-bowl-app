import React from 'react';
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogHeader,
  Button,
  StackLayout,
  H3,
} from '@salt-ds/core';
import { DIALOG_MAX_HEIGHT } from '../constants/constants';
import Markdown from 'react-markdown';

const PeteDialog = ({ open, onClose, cardData }) => {
  if (!cardData) {
    return null;
  } else {
    console.log('cardData', cardData);
  }

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogHeader header="Your Music Reference" />
      <DialogContent style={{ maxHeight: DIALOG_MAX_HEIGHT }}>
        <StackLayout>
          <H3>{cardData.title}</H3>
          <p>{cardData.date}</p>
          <Markdown>{cardData.text}</Markdown>
        </StackLayout>
      </DialogContent>
      <DialogActions>
        <Button sentiment="accented" onClick={() => onClose(false)}>
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default PeteDialog;
