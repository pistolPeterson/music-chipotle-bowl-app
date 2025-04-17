import React from 'react';
import PeteMultiSelect from '../../components/PeteMultiselect';
import { FormField, Display3 } from '@salt-ds/core';
import { INSTRUMENTS } from '../../constants/constants';

const MusicReferenceForm = () => {
  // const [state, setState] = useState(null);

  return (
    <div>
      <Display3> Music Reference Form</Display3>
      <FormField>
        <PeteMultiSelect
          label="Significant Instruments"
          comboBoxArray={INSTRUMENTS}
        ></PeteMultiSelect>
      </FormField>
    </div>
  );
};

export default MusicReferenceForm;
