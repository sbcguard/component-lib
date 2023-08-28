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
  const [filteredProps] = useState({
    name: props.name,
    onChange: props.onChange,
    value: props.value,
  });
  const checkHandler = () => {
    setIsChecked(!isChecked);
  };
  return (
    <React.Fragment>
      <input
        {...filteredProps}
        type="checkbox"
        onClick={checkHandler}
        checked={isChecked}
      />
      <label className="cb-label">{children}</label>
    </React.Fragment>
  );
};
Checkbox.displayName = 'Checkbox';
