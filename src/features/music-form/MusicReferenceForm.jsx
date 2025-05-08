import React from 'react';
import PeteMultiSelect from '../../components/PeteMultiselect';
import { FormField, Display3, Divider } from '@salt-ds/core';
import { INSTRUMENTS, MOODS, MUSIC_GENRES } from '../../constants/constants';

const MusicReferenceForm = ({ handleValidationError, onSelectionUpdate }) => {
  return (
    <div>
      <Display3> Music Reference Form</Display3>
      <FormField>
        <PeteMultiSelect
          label="Significant Instruments"
          comboBoxArray={INSTRUMENTS}
          handleValidationError={handleValidationError}
          onSelectionUpdate={onSelectionUpdate}
        ></PeteMultiSelect>
      </FormField>

      <FormField>
        <PeteMultiSelect
          label="Significant Moods"
          comboBoxArray={MOODS}
          handleValidationError={handleValidationError}
          onSelectionUpdate={onSelectionUpdate}
        ></PeteMultiSelect>
      </FormField>
      <FormField>
        <PeteMultiSelect
          label="Significant Genres"
          comboBoxArray={MUSIC_GENRES}
          handleValidationError={handleValidationError}
          onSelectionUpdate={onSelectionUpdate}
        ></PeteMultiSelect>
      </FormField>
    </div>
  );
};

export default MusicReferenceForm;
