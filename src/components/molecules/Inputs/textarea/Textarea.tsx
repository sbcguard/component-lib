import React from 'react';
import { Textarea as TextArea } from '../../../atoms';
import './Textarea.css';

export const Textarea = ({ ...props }) => {
  return (
    <div className="textarea-container">
      <label>
        <span className="textarea-label">{props.label}</span>
        <div className="textarea-wrapper">
          <TextArea {...props} />
        </div>
      </label>
    </div>
  );
};
Textarea.displayName = 'Textarea';
