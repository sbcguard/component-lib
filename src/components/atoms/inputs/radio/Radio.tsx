import React, { useState, PropsWithChildren } from 'react';
import { RadioProps } from '../../../../utils/FormTypes';
import './Radio.css';
//Placing type before props spread will default to type and allow props
//to override type, inverse will not override type
export const Radio = ({
  children,
  ...props
}: PropsWithChildren<RadioProps>) => {
  const [isChecked, setIsChecked] = useState<boolean>(props.checked || false);
  const checkHandler = () => {
    setIsChecked(!isChecked);
  };
  return (
    <div className="radio-wrapper">
      <input
        {...props}
        checked={props.checked || isChecked}
        onChange={props.onChange || checkHandler}
      />
      <label className="radio-label">{children}</label>
    </div>
  );
};
Radio.displayName = 'Radio';
