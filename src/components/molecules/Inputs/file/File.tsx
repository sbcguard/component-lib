import React from 'react';
import { ControlledFile } from '../../../atoms/inputs/file';
import { FileInputProps } from '../../../../utils/FormTypes';
import './File.css';

//Placing type before props spread will default to type and allow props
//to override type, inverse will not override type
export const FileInput = ({ ...props }: FileInputProps) => {
  return (
    <div className="file-container">
      <label>
        <span>{props.label}</span>
        <div className="file-wrapper">
          <ControlledFile
            /* Attributes above overridden by pass props */
            {...props}
            /* Attributes below preserved */
          />
        </div>
      </label>
    </div>
  );
};
FileInput.displayName = 'File';
