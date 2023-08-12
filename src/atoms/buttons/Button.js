import React from 'react';
//Placing type before props spread will default to type and allow props
//to override type, inverse will not override type
export const Button = ({ children, ...props }) => {
  return (
    <button type="button" {...props}>
      {children}
    </button>
  );
};
Button.displayName = 'Button';
