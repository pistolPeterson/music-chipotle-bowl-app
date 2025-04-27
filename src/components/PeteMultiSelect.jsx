import { ComboBox, FormFieldLabel, Option } from '@salt-ds/core';
import React, { useEffect, useState } from 'react';
import { MAX_SELECTIONS } from '../constants/constants';

const PeteMultiSelect = ({
  label = 'Music Selection Default',
  comboBoxArray,
  handleValidationError = () => {},
  onSelectionUpdate = () => {},
}) => {
  const [selected, setSelected] = useState([]);
  const [validationStatus, setValidationStatus] = useState('');
  const handleChange = (event) => {
    const value = event.target.value;
    setValue(value);
  };
  const handleSelectionChange = (event, newSelected) => {
    setSelected(newSelected);
    onSelectionUpdate(newSelected);
  };

  useEffect(() => {
    if (selected.length < MAX_SELECTIONS) {
      setValidationStatus('');
      handleValidationError(false);
    } else {
      setValidationStatus('error');
      handleValidationError(true);
    }
  }, [selected]);
  return (
    <>
      <FormFieldLabel>{label}</FormFieldLabel>
      <ComboBox
        multiselect
        onChange={handleChange}
        onSelectionChange={handleSelectionChange}
        validationStatus={validationStatus}
      >
        {comboBoxArray?.map((element) => (
          <Option value={element} key={element}></Option>
        ))}
      </ComboBox>
    </>
  );
};

export default PeteMultiSelect;
