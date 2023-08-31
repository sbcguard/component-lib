import React, { PropsWithChildren } from 'react';
import { ButtonProps } from '../../../utils/FormTypes';
import './Button.css';
//Placing type before props spread will default to type and allow props
//to override type, inverse will not override type
export const Button = ({ ...props }: PropsWithChildren<ButtonProps>) => {
  const filteredProps = {
    ...props,
    styleClass: undefined,
  };
  return (
    <button {...filteredProps} className={`btn btn-c-${props.styleClass}`}>
      {props.label}
    </button>
  );
};
Button.displayName = 'Button';
