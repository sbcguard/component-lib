import React, { useState, ChangeEvent, FocusEvent, KeyboardEvent } from 'react';
import { placeholder, types } from '../../utils/constants';
import './Input.css';
type InputProps = {
  type: string;
  maxLength: number;
  required: boolean;
};

//Placing type before props spread will default to type and allow props
//to override type, inverse will not override type
export const Input = ({ ...props }: InputProps) => {
  const [errMsg, setErrMsg] = useState<string>('');
  const [inputType] = useState<string>(props.type || '');
  const [keys] = useState<RegExp>(types[inputType].keys);
  const [error] = useState<string>(types[inputType].error);
  const [checkVal] = useState<RegExp>(types[inputType].value);
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
        placeholder={placeholder[inputType]}
        /* Attributes above overridden by pass props */
        {...props}
        /* Attributes below preserved */
        onInput={handleInput}
        onChange={handleInput}
        onBlur={handleInput}
        onKeyDown={handleInputKey}
      />
      <span className="error">{errMsg}</span>
    </div>
  );
};
Input.displayName = 'Input';
