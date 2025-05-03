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
import { ReactElement, use, useState } from 'react';
import { usePostData } from '../../hooks/usePostData';
import Markdown from 'react-markdown';
import { useLocalStorage } from '../../hooks/useLocalStorage';

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
  const { setItem } = useLocalStorage('MUSIC_REFERNECES');
  const { data, loading, error, postData } = usePostData();
  const id = useId();

  const onOpenChange = (value) => {};

  const handleClose = () => {
    //prop up to parent component to close the panel
    onUserClosePanel();
  };

  const handleAccept = async () => {
    const url = 'https://api.openai.com/v1/responses';
    try {
      const res = await postData(url, apiPrompt(musicReferenceFormData));

      const dataFromApi = res.output[0].content[0].text;

      setItem(`PeteKey ${res.id}`, dataFromApi);
    } catch (error) {
      console.error('Error saving data:', error);
    }
  };

  const apiPrompt = (musicReferenceFormData) => {
    const prompt = `You are a music expert. Based on the following data, please provide 10 classical, game or film music references most similar to these: ${JSON.stringify(
      musicReferenceFormData,
    )} there must be at least 2 references for each item. Pleae provide just the title, composer and a short description of the music. Do not provide any other information. The references should be in a list format, with each reference on a new line. Please do not include any additional text or explanations. The references should be relevant to the data provided and should reflect the mood, genre, and instrument specified. `;
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
