import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogHeader,
  H3,
  StackLayout,
  useId,
  Spinner,
} from '@salt-ds/core';
import { ReactElement, useState } from 'react';
import { usePostData } from '../../hooks/usePostData';
import Markdown from 'react-markdown';

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
  const { data, loading, error, postData } = usePostData();
  const id = useId();

  const onOpenChange = (value) => {};

  const handleClose = () => {
    //prop up to parent component to close the panel
    onUserClosePanel();
  };

  const handleAccept = () => {
    const url = 'https://api.openai.com/v1/responses';
    postData(url, apiPrompt(musicReferenceFormData));
  };

  const apiPrompt = (musicReferenceFormData) => {
    const prompt = `You are a music expert. Based on the following data, please provide 5 classical, game or film music references most similar to these: ${JSON.stringify(
      musicReferenceFormData,
    )}`;
    return prompt;
  };

  return (
    <>
      <Dialog open={IsPanelOpened} onOpenChange={onOpenChange} id={id}>
        <DialogHeader header="Finalize your Music Bowl" />
        <DialogContent style={{ maxHeight: 500 }}>
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

            {loading && (
              <Spinner aria-label="loading" role="status" size="small" />
            )}
            {error && (
              <p style={{ color: 'red' }}>
                Error: {error.message || 'Something went wrong!'}
              </p>
            )}
            {data && (
              <div>
                <p>References:</p>
                <Markdown>{data.output[0].content[0].text}</Markdown>
              </div>
            )}
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
          <Button sentiment="accented" onClick={handleAccept}>
            Accept
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default ConfirmPanel;
