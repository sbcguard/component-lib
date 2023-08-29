import React, { useState, PropsWithChildren } from 'react';
import { RadioProps } from '../../../../utils/FormTypes';
import './Radio.css';
//Placing type before props spread will default to type and allow props
//to override type, inverse will not override type
export const Radio = ({
  children,
  ...props
}: PropsWithChildren<RadioProps>) => {
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const handleSingleRadio = (): void => {
    setIsChecked(!isChecked);
  };
  return (
    <React.Fragment>
      <label className="radio-label">
        <input
          {...props}
          type="radio"
          checked={props.checked || isChecked}
          onChange={props.onChange}
          onClick={props.onClick !== undefined ? handleSingleRadio : undefined}
        />
        {children}
      </label>
    </React.Fragment>
  );
};
Radio.displayName = 'Radio';
