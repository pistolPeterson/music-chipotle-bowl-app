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
import Markdown from 'react-markdown';

const PeteCard = ({ text, onViewMusicReferences }) => {
  const [open, setOpen] = useState(false);
  const id = useId();

  const handleViewReferencesClick = () => {
    if (onViewMusicReferences) {
      onViewMusicReferences({ text });
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
            <Text>
              <Markdown>Previous Music Reference</Markdown>
            </Text>
          </StackLayout>
          <Button onClick={handleViewReferencesClick}>View</Button>
        </StackLayout>
      </Card>
    </>
  );
};

export default PeteCard;
