import React, { HTMLProps } from 'react';
import './Form.css';
//Placing type before props spread will default to type and allow props
//to override type, inverse will not override type
export const FormRow = ({ children, ...props }: HTMLProps<HTMLDivElement>) => {
  return (
    <div {...props} className="form-row">
      {children}
    </div>
  );
};
FormRow.displayName = 'FormRow';
