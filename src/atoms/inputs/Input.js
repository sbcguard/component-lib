import React from 'react';
//Placing type before props spread will default to type and allow props
//to override type, inverse will not override type
export const Input = ({ ...props }) => {
  return <input type="text" {...props} />;
};
Input.displayName = 'Input';
