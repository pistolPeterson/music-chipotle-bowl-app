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
  const handleSelectionChange = (event, newSelected) => {
    const labeledSelections = newSelected.map((value) => ({
      label,
      value,
    }));
    setSelected(labeledSelections);

    onSelectionUpdate(label, labeledSelections);
  };

  useEffect(() => {
    if (selected.length < MAX_SELECTIONS) {
      setValidationStatus('');
      handleValidationError(label, false);
    } else {
      setValidationStatus('error');
      handleValidationError(label, true);
    }
  }, [selected]);
  return (
    <>
      <FormFieldLabel>{label}</FormFieldLabel>
      <ComboBox
        multiselect
        onSelectionChange={handleSelectionChange}
        validationStatus={validationStatus}
        selected={selected.map((s) => s.value)}
        defaultValue={[]}
      >
        {comboBoxArray?.map((element) => (
          <Option value={element} key={element}></Option>
        ))}
      </ComboBox>
    </>
  );
};

export default PeteMultiSelect;
