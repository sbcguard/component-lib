import React, { useState, useEffect, ChangeEvent } from 'react';
import { Checkbox } from './Checkbox';
import {
  CheckboxGroupProps,
  CheckboxInterface,
} from '../../../../utils/FormTypes';
import './Checkbox.css';

export const CheckboxGroup = ({ ...props }: CheckboxGroupProps) => {
  const [errMsg /*setErrMsg*/] = useState<string>('');
  const [chkVal, setChkVal] = useState<string>('');

  const [boxes, setBoxes] = useState<CheckboxInterface[]>([
    {
      value: 'Default',
      label: 'Default',
    },
  ]);
  useEffect(() => {
    props.boxes && setBoxes([...props.boxes]);
  }, [props.boxes]);
  const handleCheckboxGroup = (e: ChangeEvent<HTMLInputElement>) => {
    setChkVal(e.target.value);
  };
  return (
    <div className="input-container">
      <div className="checkbox-group-container">
        <label>
          {props.label}
          {boxes.map((box: CheckboxInterface) => (
            <Checkbox
              key={`${props.fieldName}-${box.value}`}
              type="checkbox"
              name={props.fieldName}
              checked={chkVal === box.value}
              value={box.value}
              onChange={handleCheckboxGroup}
            >
              {box.label}
            </Checkbox>
          ))}
        </label>
      </div>
      <div>
        <span className="error">{errMsg}</span>
      </div>
    </div>
  );
};
CheckboxGroup.displayName = 'CheckboxGroup';
