import React, { useState, useEffect, ChangeEvent, FocusEvent } from 'react';
import { ControlledRadio, ErrorSpan } from '../../../atoms';
import { RadioGroupProps, RadioInterface } from '../../../../utils/FormTypes';
import './RadioGroup.css';

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
  const validate = (e: FocusEvent<HTMLLabelElement>) => {
    console.log(e.target, chkVal);
  };
  return (
    <div className="radio-container">
      <div className="radio-group-container">
        <label onBlur={validate}>
          <span className="radio-group-label">{props.label}</span>
          {radios.map((radio: RadioInterface) => (
            <div
              className="radio-wrapper"
              key={`${props.fieldName}-${radio.value}`}
            >
              <ControlledRadio
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
              </ControlledRadio>
            </div>
          ))}
        </label>
      </div>
      <div>
        <ErrorSpan>{errMsg}</ErrorSpan>
      </div>
    </div>
  );
};
RadioGroup.displayName = 'RadioGroup';
