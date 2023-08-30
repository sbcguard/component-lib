import React, {
  useState,
  useEffect,
  FocusEvent,
  ChangeEvent,
  MouseEvent,
} from 'react';
import { ErrorSpan } from '../../span/Error';
import { OptionInterface, SelectProps } from '../../../../utils/FormTypes';
import { types } from '../../../../utils/constants';
import { Option } from './Option';
import './Select.css';
//Placing type before props spread will default to type and allow props
//to override type, inverse will not override type
export const ControlledSelect = ({ ...props }: SelectProps) => {
  const [errMsg, setErrMsg] = useState<string>('');
  const [options, setOptions] = useState<OptionInterface[]>([
    {
      value: 'Default',
      displayText: 'Default',
    },
  ]);
  useEffect(() => {
    props.options && setOptions([...props.options]);
  }, [props.options]);

  const handleSelectClick = (e: MouseEvent<HTMLSelectElement>) => {
    if (props.multiple) {
      e.preventDefault();
      const clickedOption: HTMLOptionElement | null =
        e.target instanceof HTMLOptionElement ? e.target : null;
      if (clickedOption) {
        clickedOption.selected = !clickedOption.selected;
        clickedOption?.parentElement?.focus();
      }
    }
    validateEl(e.currentTarget);
  };
  const validate = (
    e: FocusEvent<HTMLSelectElement> | ChangeEvent<HTMLSelectElement>,
  ) => {
    const { target } = e;
    const { selectedOptions } = target;
    if (props.required) {
      if (props.multiple) {
        selectedOptions.length === 0 ? displayErr() : clearErr();
      } else {
        selectedOptions[0].value ? clearErr() : displayErr();
      }
    } else {
      clearErr();
    }
  };
  const validateEl = (el: HTMLSelectElement) => {
    const { selectedOptions } = el;
    if (props.required) {
      if (props.multiple) {
        selectedOptions.length === 0 ? displayErr() : clearErr();
      } else {
        selectedOptions[0].value ? clearErr() : displayErr();
      }
    } else {
      clearErr();
    }
  };
  const displayErr = () => {
    setErrMsg(types[props.multiple ? 'select-multiple' : 'select-one'].error);
  };
  const clearErr = () => {
    setErrMsg('');
  };

  return (
    <React.Fragment>
      <select
        name={props.fieldName}
        multiple={props.multiple}
        required={props.required}
        onMouseDown={handleSelectClick}
        onChange={validate}
        onBlur={validate}
      >
        {!props.multiple && <option value="">Choose...</option>}
        {options.map((option: OptionInterface) => (
          <Option
            key={`${props.fieldName}-${option.value}`}
            value={option.value}
            displayText={option.displayText}
          />
        ))}
      </select>
      <ErrorSpan>{errMsg}</ErrorSpan>
    </React.Fragment>
  );
};
ControlledSelect.displayName = 'ControlledSelect';
