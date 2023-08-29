import React from 'react';
import { TextareaProperties } from '../../../../utils/FormTypes';
import { ControlledTextarea } from '../../../atoms';
import './Textarea.css';

export const Textarea = ({ ...props }: TextareaProperties) => {
  return (
    <div className="textarea-container">
      <label>
        <span className="textarea-label">{props.label}</span>
        <div className="textarea-wrapper">
          <ControlledTextarea {...props} />
        </div>
      </label>
    </div>
  );
};
Textarea.displayName = 'Textarea';
