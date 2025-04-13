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

const PeteDialog = ({ open, onClose, cardData }) => {
  if (!cardData) {
    return null;
  }

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogHeader header="Your Music Reference" />
      <DialogContent style={{ maxHeight: DIALOG_MAX_HEIGHT }}>
        <StackLayout>
          <H3>{cardData.title}</H3>
          <p>{cardData.date}</p>
          <p>{cardData.text}</p>
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
