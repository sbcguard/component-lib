import React, { useState } from 'react';
import { placeholder, types } from '../../utils/constants';
import './Input.css';
//Placing type before props spread will default to type and allow props
//to override type, inverse will not override type
export const Input = ({ ...props }) => {
  const [ errMsg, setErrMsg ] = useState('')
  const [ type, ] = useState(props.type)
  const [ keys, ] = useState(types[type].keys)
  const [ error, ] = useState(types[type].error)
  const [ checkVal, ] = useState(types[type].value)
  const handleInputKey = (e) => {
      const { key } = e
      const resolvedKey = key === ' ' ? 'Space' : key
      if(!(keys.test(resolvedKey)) && !['Delete','Backspace','ArrowLeft','ArrowRight'].includes(key)) e.preventDefault();
  }
  const handleChange = (e) => {
    const { target } = e
    const { required } = target
    let { value } = target
    const isNull = value.trim().length === 0
    required && isNull && setErrMsg(error)
    required && !isNull && !checkVal.test(value) && setErrMsg(error)
    !required && !isNull && !checkVal.test(value) && setErrMsg(error)
    required && !isNull && checkVal.test(value) && setErrMsg('')
    !required && !isNull && checkVal.test(value) && setErrMsg('')
    !required && isNull && !value && setErrMsg('')
  }
  return <div className='input-container'>
            <input type="text" maxLength={ 3 } placeholder={ placeholder[props.type] } {...props} onChange={handleChange} onKeyDown={handleInputKey} />
            <span className='error'>{ errMsg }</span>
          </div>;
};
Input.displayName = 'Input';
