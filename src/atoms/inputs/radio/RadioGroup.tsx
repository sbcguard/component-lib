import React, { useState, useEffect, ChangeEvent } from 'react';
import { Radio } from './Radio';
import { RadioGroupProps, RadioInterface } from '../../../utils/FormTypes';

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
    setChkVal(e.target.value);
  };
  return (
    <React.Fragment>
      <div className="radio-group-container">
        {radios.map((radio: RadioInterface) => (
          <Radio
            key={`${props.fieldName}-${radio.value}`}
            type="radio"
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
