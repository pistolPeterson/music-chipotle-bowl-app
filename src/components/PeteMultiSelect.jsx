import { ComboBox, FormFieldLabel, Option } from '@salt-ds/core';
import React, { useEffect, useState } from 'react';
import { MAX_SELECTIONS } from '../constants/constants';

const PeteMultiSelect = ({
  label = 'Music Selection Default',
  comboBoxArray,
}) => {
  const [value, setValue] = useState('');
  const [selected, setSelected] = useState([]);
  const [validationStatus, setValidationStatus] = useState('');
  const handleChange = (event) => {
    const value = event.target.value;
    setValue(value);
  };
  const handleSelectionChange = (event, newSelected) => {
    setSelected(newSelected);
  };

  useEffect(() => {
    if (selected.length < MAX_SELECTIONS) {
      setValidationStatus('');
    } else {
      setValidationStatus('error');
    }
  }, [selected]);
  return (
    <>
      <FormFieldLabel>
        <div className="">{label} </div>
      </FormFieldLabel>
      <ComboBox
        multiselect
        value={value}
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
