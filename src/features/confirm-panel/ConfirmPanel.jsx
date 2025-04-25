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

const ConfirmPanel = () => {
  const [open, setOpen] = useState(true);
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
      <Dialog open={open} onOpenChange={onOpenChange} id={id}>
        <DialogHeader header="Finalize your Music Bowl" />
        <DialogContent style={{ maxHeight: 400 }}>
          <StackLayout>
            <H3>Your Order!</H3>
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
