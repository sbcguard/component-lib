import React, { useState, useEffect, ChangeEvent } from 'react';
import { Radio } from './Radio';
import { RadioGroupProps, RadioInterface } from '../../../../utils/FormTypes';

export const RadioGroup = ({ ...props }: RadioGroupProps) => {
  const [errMsg /*setErrMsg*/] = useState<string>('');
  const [chkVal, setChkVal] = useState<string>('');

  const [radios, setRadios] = useState<RadioInterface[]>([
    {
      value: 'Default',
      label: 'Default',
    },
  ]);
  useEffect(() => {
    props.radios && setRadios([...props.radios]);
  }, [props.radios]);
  const handleRadioGroup = (e: ChangeEvent<HTMLInputElement>) => {
    setChkVal(e.currentTarget.value);
  };
  return (
    <div className="input-container">
      <div className="radio-group-container">
        <label>
          {props.label}
          {radios.map((radio: RadioInterface) => (
            <Radio
              key={`${props.fieldName}-${radio.value}`}
              name={props.fieldName}
              checked={
                typeof radio.value === 'number'
                  ? parseInt(chkVal) === radio.value
                  : chkVal === radio.value
              }
              value={radio.value}
              onChange={handleRadioGroup}
            >
              {radio.label}
            </Radio>
          ))}
        </label>
      </div>
      <div>
        <span className="error">{errMsg}</span>
      </div>
    </div>
  );
};
RadioGroup.displayName = 'RadioGroup';
