import React, { useState, ChangeEvent, FocusEvent, KeyboardEvent } from 'react';
import { pholder, types } from '../../../utils/constants';
import { InputProps } from '../../../utils/FormTypes';
import './Input.css';

//Placing type before props spread will default to type and allow props
//to override type, inverse will not override type
export const File = ({ ...props }: InputProps) => {
  const [errMsg, setErrMsg] = useState<string>('');
  const [inputType] = useState<string>(props.type || '');
  const [keys] = useState<RegExp>(types[inputType].keys);
  const [error] = useState<string>(types[inputType].error);
  const [checkVal] = useState<RegExp>(types[inputType].value);
  const handleInput = (
    e: ChangeEvent<HTMLInputElement> | FocusEvent<HTMLInputElement>,
  ) => {
    const { target } = e;
    const { required } = target;
    const { value } = target;
  };
  return (
    <div className="input-container">
      <input
        /* Attributes above overridden by pass props */
        {...props}
        /* Attributes below preserved */
        placeholder={pholder.file}
        type="file"
        onInput={handleInput}
        onChange={handleInput}
        onBlur={handleInput}
      />
      <span className="error">{errMsg}</span>
    </div>
  );
};
File.displayName = 'File';
