import React from 'react';
import { ControlledSelect } from '../../../atoms';
import './Select.css';
import { SelectProps } from '../../../../utils/FormTypes';
//Placing type before props spread will default to type and allow props
//to override type, inverse will not override type
export const Select = ({ ...props }: SelectProps) => {
  return (
    <div className="select-container">
      <label>
        <span className="select-label">{props.label}</span>
        <div className="select-wrapper">
          <ControlledSelect {...props} />
        </div>
      </label>
    </div>
  );
};
Select.displayName = 'Select';
