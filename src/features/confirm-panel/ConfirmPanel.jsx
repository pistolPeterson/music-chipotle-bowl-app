import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogHeader,
  H3,
  StackLayout,
  useId,
} from '@salt-ds/core';
import { ReactElement, useState } from 'react';

// hide show confirm panel, based on music reference form results
const ConfirmPanel = ({
  IsPanelOpened = true,
  onUserClosePanel,
  musicReferenceFormData = [
    { label: 'Instrument', value: 'Guitar' },
    { label: 'Instrument', value: 'Piano' },
    { label: 'Mood', value: 'Rock' },
    { label: 'Genre', value: 'gas' },
    { label: 'Genre', value: 'cake' },
  ],
}) => {
  const id = useId();

  const onOpenChange = (value) => {};

  const handleClose = () => {
    //prop up to parent component to close the panel
    onUserClosePanel();
  };
  return (
    <>
      <Dialog open={IsPanelOpened} onOpenChange={onOpenChange} id={id}>
        <DialogHeader header="Finalize your Music Bowl" />
        <DialogContent style={{ maxHeight: 400 }}>
          <StackLayout>
            <H3>Your Order!</H3>
            <p>Here is the summary of your order:</p>
            <ul>
              {musicReferenceFormData.map((item, index) => (
                <li key={index}>
                  {item.label}: {item.value}
                </li>
              ))}
            </ul>
          </StackLayout>
        </DialogContent>
        <DialogActions>
          <Button
            sentiment="accented"
            appearance="bordered"
            onClick={handleClose}
          >
            Go Back
          </Button>
          <Button sentiment="accented" onClick={handleClose}>
            Accept
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default ConfirmPanel;
