import React, { useState } from 'react';
import './Radio.css';
//Placing type before props spread will default to type and allow props
//to override type, inverse will not override type
export const Radio = ({ children, ...props }) => {
  const [checked, setChecked] = useState(props.checked);
  const handleChecked = () => {
    setChecked(!checked);
  };
  return (
    <div>
      <input
        {...props}
        type="radio"
        checked={checked}
        onClick={handleChecked}
      />
      <label>{children}</label>
    </div>
  );
};
Radio.displayName = 'Radio';
