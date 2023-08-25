import React, { useState, useEffect } from 'react';
import { OptionInterface, SelectProps } from '../../../../utils/FormTypes';
import { Option } from './Option';
//Placing type before props spread will default to type and allow props
//to override type, inverse will not override type
export const Select = ({ ...props }: SelectProps) => {
  const [errMsg /*setErrMsg*/] = useState<string>('');
  const [options, setOptions] = useState<OptionInterface[]>([
    {
      value: 'Default',
      displayText: 'Default',
    },
  ]);
  useEffect(() => {
    props.options && setOptions([...props.options]);
  }, [props.options]);
  return (
    <div className="input-container">
      <div className="radio-group-container">
        <label>
          {props.label}
          <select {...props}>
            <option value="">Choose...</option>
            {options.map((option: OptionInterface) => (
              <Option
                key={`${props.fieldName}-${option.value}`}
                value={option.value}
                displayText={option.displayText}
              />
            ))}
          </select>
        </label>
      </div>
      <div>
        <span className="error">{errMsg}</span>
      </div>
    </div>
  );
};
Select.displayName = 'Select';
