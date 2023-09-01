import React, { PropsWithChildren } from 'react';
import { FaArrowLeft } from 'react-icons/fa6';
import { ButtonProps } from '../../../utils/FormTypes';
import './Button.css';
//Placing type before props spread will default to type and allow props
//to override type, inverse will not override type
export const Button = ({ ...props }: PropsWithChildren<ButtonProps>) => {
  const filteredProps = {
    ...props,
    styleClass: undefined,
  };
  delete filteredProps.styleClass;
  return (
    <button {...filteredProps} className={`btn btn-${props.styleClass}`}>
      {props.styleClass === 'back' && <FaArrowLeft />}
      {props.label}
    </button>
  );
};
Button.displayName = 'Button';
