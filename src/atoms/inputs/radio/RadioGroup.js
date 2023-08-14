import React, { useState, useEffect } from 'react';
import { Radio } from './Radio';
//import { types } from '../../../utils/constants'

export const RadioGroup = ({ ...props }) => {
  const [errMsg /*setErrMsg*/] = useState('');
  const [chkVal, setChkVal] = useState('');

  const [radios, setRadios] = useState([
    {
      value: 'Y',
      label: 'Y',
    },
  ]);
  useEffect(() => {
    console.log(props.radios, props.radiosObject);
    props.radios && setRadios([...props.radios]);
  }, [props.radios, props.radiosObject]);
  const handleRadioGroup = (e) => {
    setChkVal(e.target.value);
  };
  return (
    <React.Fragment>
      <div className="radio-group-container">
        {radios.map((radio) => (
          <Radio
            key={`${props.fieldName}-${radio.value}`}
            name={props.fieldName}
            checked={chkVal === radio.value}
            value={radio.value}
            onChange={handleRadioGroup}
          >
            {radio.label}
          </Radio>
        ))}
      </div>
      <div>
        <span className="error">{errMsg}</span>
      </div>
    </React.Fragment>
  );
};
RadioGroup.displayName = 'RadioGroup';
