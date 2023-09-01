import React from 'react';
import { FormProps } from '../../../utils/FormTypes';
import './Form.css';
//Placing type before props spread will default to type and allow props
//to override type, inverse will not override type
export const Form = ({ children, ...props }: FormProps) => {
  return (
    <form className="form" {...props}>
      {children}
    </form>
  );
};
Form.displayName = 'Form';
