import React, { useState, useEffect, ChangeEvent } from 'react';
import { Checkbox } from './Checkbox';
import {
  CheckboxGroupProps,
  CheckboxInterface,
} from '../../../../utils/FormTypes';
import { types } from '../../../../utils/constants';
import './Checkbox.css';

export const CheckboxGroup = ({ ...props }: CheckboxGroupProps) => {
  const [errMsg, setErrMsg] = useState<string>('');
  const [val, setVal] = useState<(string | number)[]>([]);
  const [boxes, setBoxes] = useState<CheckboxInterface[]>([
    {
      value: 'Default',
      label: 'Default',
      isChecked: false,
    },
  ]);
  useEffect(() => {
    props.boxes && setBoxes([...props.boxes]);
  }, [props.boxes]);
  const handleCheckboxGroup = (e: ChangeEvent<HTMLInputElement>) => {
    const isChecked = e.target.checked;
    setVal((prevVal) => {
      const newVal = isChecked
        ? [...prevVal, e.target.value]
        : prevVal.filter((el) => el !== e.target.value);
      validate(newVal);
      return newVal;
    });
  };
  const validate = (selections: (string | number)[]) => {
    props.required && selections.length === 0
      ? setErrMsg(types.checkbox.error)
      : setErrMsg('');
  };
  return (
    <div className="input-container">
      <div className="checkbox-group-container">
        <label>
          {props.label}
          {boxes.map((box: CheckboxInterface) => (
            <Checkbox
              key={`${props.fieldName}-${box.value}`}
              name={`${props.fieldName}-${box.value}`}
              isChecked={box.isChecked}
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
      <input type="hidden" name={props.fieldName} value={val.join(',')} />
    </div>
  );
};
CheckboxGroup.displayName = 'CheckboxGroup';
