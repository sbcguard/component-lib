import React, { useState, ChangeEvent, FocusEvent, KeyboardEvent } from 'react';
import { pholder, types } from '../../utils/constants';
import { InputProps } from '../../utils/FormTypes';
import './Input.css';

//Placing type before props spread will default to type and allow props
//to override type, inverse will not override type
export const Input = ({ ...props }: InputProps) => {
  const [errMsg, setErrMsg] = useState<string>('');
  const [inputType] = useState<string>(props.type || '');
  const [keys] = useState<RegExp>(types[inputType].keys);
  const [error] = useState<string>(types[inputType].error);
  const [checkVal] = useState<RegExp>(types[inputType].value);
  const [displayVal, setDisplayVal] = useState<string | number | Date>('');
  const handleInputKey = (e: KeyboardEvent<HTMLInputElement>) => {
    const { key } = e;
    const resolvedKey = key === ' ' ? 'Space' : key;
    if (
      !keys.test(resolvedKey) &&
      !['Delete', 'Backspace', 'ArrowLeft', 'ArrowRight'].includes(key)
    )
      e.preventDefault();
  };
  const handleInput = (
    e: ChangeEvent<HTMLInputElement> | FocusEvent<HTMLInputElement>,
  ) => {
    const { target } = e;
    const { required } = target;
    const { value } = target;
    setDisplayVal(value);
    const isNull = value.trim().length === 0;
    required && isNull && setErrMsg(error);
    required && !isNull && !checkVal.test(value) && setErrMsg(error);
    !required && !isNull && !checkVal.test(value) && setErrMsg(error);
    required && !isNull && checkVal.test(value) && setErrMsg('');
    !required && !isNull && checkVal.test(value) && setErrMsg('');
    !required && isNull && !value && setErrMsg('');
  };
  return (
    <div className="input-container">
      <input
        placeholder={pholder[inputType]}
        /* Attributes above overridden by pass props */
        {...props}
        /* Attributes below preserved */
        onInput={handleInput}
        onChange={handleInput}
        onBlur={handleInput}
        onKeyDown={handleInputKey}
      />
      {inputType === 'range' && (
        <div className="range-selector-display">
          <span>{props.min}</span>
          <span>{displayVal.toString()}</span>
          <span>{props.max}</span>
        </div>
      )}
      {inputType === 'ssn' && <span>{error}</span>}
      <span className="error">{errMsg}</span>
    </div>
  );
};
Input.displayName = 'Input';
