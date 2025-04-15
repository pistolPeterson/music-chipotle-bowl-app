
import { ComboBox, FormFieldLabel } from '@salt-ds/core';
import React, { useState } from 'react';

const PeteMultiSelect = ({ label = 'Music Selection Default' }) => {
    const [value, setValue] = useState("");
    const handleChange = (event) => {
        const value = event.target.value;
        setValue(value);
        console.log(value);
    }

  return <><FormFieldLabel><div className="">{label} </div></FormFieldLabel>
  <ComboBox multiselect value={value} onChange={handleChange}></ComboBox>
  </>;
};

export default PeteMultiSelect;
