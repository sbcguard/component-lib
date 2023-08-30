import React from 'react';
import { ControlledFile } from '../../../atoms/inputs/file';
import { FileInputProps } from '../../../../utils/FormTypes';
import './File.css';

//Placing type before props spread will default to type and allow props
//to override type, inverse will not override type
export const FileInput = ({ ...props }: FileInputProps) => {
  const filteredProps = {
    ...props,
    type: undefined,
  };
  return (
    <div className="file-container">
      <label>
        <span className="file-label">{props.label}</span>
        <div className="file-wrapper">
          <ControlledFile
            /* Attributes above overridden by pass props */
            {...filteredProps}
            /* Attributes below preserved */
          />
        </div>
      </label>
    </div>
  );
};
FileInput.displayName = 'File';
