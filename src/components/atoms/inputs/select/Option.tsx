import React from 'react';
import { OptionProps } from '../../../../utils/FormTypes';
//Placing type before props spread will default to type and allow props
//to override type, inverse will not override type
export const Option = ({ ...props }: OptionProps) => {
  return (
    <option value={props.value} onClick={props.onClick}>
      {props.displayText}
    </option>
  );
};
Option.displayName = 'Option';
