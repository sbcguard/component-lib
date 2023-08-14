import React from 'react';
import './Radio.css';
//Placing type before props spread will default to type and allow props
//to override type, inverse will not override type
export const Radio = ({ children, ...props }) => {
  return (
    <div>
      <input {...props} type="radio" />
      <label className="radio-label">{children}</label>
    </div>
  );
};
Radio.displayName = 'Radio';
