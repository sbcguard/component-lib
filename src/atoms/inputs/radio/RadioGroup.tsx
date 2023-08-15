import React, { useState, useEffect, ChangeEvent } from 'react';
import { Radio } from './Radio';
//import { types } from '../../../utils/constants'
type RadioGroup = {
  fieldName: string;
  radios: IRadio[];
};
interface IRadio {
  value: string | number;
  label: string;
}

export const RadioGroup = ({ ...props }: RadioGroup) => {
  const [errMsg /*setErrMsg*/] = useState<string>('');
  const [chkVal, setChkVal] = useState<string>('');

  const [radios, setRadios] = useState<IRadio[]>([
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
        {radios.map((radio: IRadio) => (
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
