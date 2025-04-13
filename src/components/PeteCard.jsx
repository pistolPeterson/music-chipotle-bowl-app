/* eslint-disable no-unused-vars */
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

const PeteCard = ({
  title,
  date = 'March 7, 2024',
  text,
  onViewMusicReferences,
}) => {
  const [open, setOpen] = useState(false);
  const id = useId();

  const handleViewReferencesClick = () => {
    if (onViewMusicReferences) {
      onViewMusicReferences({ title, text, date });
    }
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
          <Button onClick={handleViewReferencesClick}>View References</Button>
        </StackLayout>
      </Card>
    </>
  );
};

export default PeteCard;
