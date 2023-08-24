import React, { PropsWithChildren } from 'react';
import { CheckboxProps } from '../../../../utils/FormTypes';
import './Checkbox.css';
//Placing type before props spread will default to type and allow props
//to override type, inverse will not override type
export const Checkbox = ({
  children,
  ...props
}: PropsWithChildren<CheckboxProps>) => {
  return (
    <div>
      <input {...props} type="checkbox" />
      <label className="checkbox-label">{children}</label>
    </div>
  );
};
Checkbox.displayName = 'Checkbox';
