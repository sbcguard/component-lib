import React from 'react';
import { ControlledSelect } from '../../../atoms';
import './Select.css';
import { SelectProps } from '../../../../utils/FormTypes';
//Placing type before props spread will default to type and allow props
//to override type, inverse will not override type
export const Select = ({ ...props }: SelectProps) => {
  return (
    <div className="select-container">
      <div className="select-group-container">
        <ControlledSelect {...props} />
      </div>
    </div>
  );
};
Select.displayName = 'Select';
