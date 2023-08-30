import React from 'react';
import { ControlledInput } from '../../../atoms';
import { InputProps } from '../../../../utils/FormTypes';
import './Input.css';

//Placing type before props spread will default to type and allow props
//to override type, inverse will not override type
export const Input = ({ ...props }: InputProps) => {
  return (
    <div className="input-container">
      <label className="input-label">
        <span className="input-label-text">{props.label}</span>
        <div className="input-wrapper">
          <ControlledInput
            /* Attributes above overridden by pass props */
            {...props}
            /* Attributes below preserved */
          />
        </div>
      </label>
    </div>
  );
};
Input.displayName = 'Input';
