import React from 'react';
//Placing type before props spread will default to type and allow props
//to override type, inverse will not override type
export const Radio = ({ ...props }) => {
  return <input {...props} type="radio" />;
};
Radio.displayName = 'Radio';
