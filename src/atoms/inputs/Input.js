import React from 'react';
import { placeholder, types } from '../../utils/constants';
//Placing type before props spread will default to type and allow props
//to override type, inverse will not override type
export const Input = ({ ...props }) => {
    function handleInputKey(e) {
        const key = e.keyCode === 32 ? 'Space' : e.key
        const type = e.target.type
        //const maxLength = e.target.maxLength
        //const length = e.target.value.length
        //console.log(maxLength,length)
        if(!(types[type].keys.test(key)) && !['Delete','Backspace','ArrowLeft','ArrowRight'].includes(key)) e.preventDefault();
    }
  return <input type="text" maxLength={3} placeholder={placeholder[props.type]} {...props} onKeyDown={handleInputKey}/>;
};
Input.displayName = 'Input';
