import React, { useState, PropsWithChildren } from 'react';
import { RadioProps } from '../../../../utils/FormTypes';
import './Radio.css';
//Placing type before props spread will default to type and allow props
//to override type, inverse will not override type
export const Radio = ({
  children,
  ...props
}: PropsWithChildren<RadioProps>) => {
  const [isChecked, setIsChecked] = useState(props.checked);
  const handleClick = (e) => {
    setIsChecked(!isChecked);
  };
  return (
    <div className="radio-wrapper">
      <input onClick={handleClick} checked={isChecked} {...props} />
      <label className="radio-label">{children}</label>
    </div>
  );
};
Radio.displayName = 'Radio';
