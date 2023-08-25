import React, { useState, PropsWithChildren } from 'react';
import { CheckboxProps } from '../../../../utils/FormTypes';
import './Checkbox.css';
//Placing type before props spread will default to type and allow props
//to override type, inverse will not override type
export const Checkbox = ({
  children,
  ...props
}: PropsWithChildren<CheckboxProps>) => {
  const [isChecked, setIsChecked] = useState<boolean>(props.isChecked);
  const checkHandler = () => {
    setIsChecked(!isChecked);
  };
  return (
    <div className="checkbox-wrapper">
      <input
        {...props}
        type="checkbox"
        onClick={checkHandler}
        checked={isChecked}
      />
      <label className="checkbox-label">{children}</label>
    </div>
  );
};
Checkbox.displayName = 'Checkbox';
