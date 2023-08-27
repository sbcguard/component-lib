import React, { useState, useEffect, ChangeEvent, MouseEvent } from 'react';
import { OptionInterface, SelectProps } from '../../../../utils/FormTypes';
import { Option } from './Option';
import './Select.css';
//Placing type before props spread will default to type and allow props
//to override type, inverse will not override type
export const Select = ({ ...props }: SelectProps) => {
  const [errMsg /*setErrMsg*/] = useState<string>('');
  const [selection, setSelection] = useState<string | string[]>(
    props.multiple ? [] : '',
  );
  const [options, setOptions] = useState<OptionInterface[]>([
    {
      value: 'Default',
      displayText: 'Default',
    },
  ]);
  useEffect(() => {
    props.options && setOptions([...props.options]);
  }, [props.options]);
  const handleSelection = (e: ChangeEvent<HTMLSelectElement>) => {
    const selections: HTMLOptionElement[] = Array.from(
      e.currentTarget.selectedOptions,
    );
    //console.log(props.multiple);
    setSelection(
      props.multiple
        ? selections
            .filter((opt: HTMLOptionElement) => opt.selected)
            .map((opt: HTMLOptionElement) => opt.value)
            .join(',')
        : selections
            .filter((opt: HTMLOptionElement) => opt.selected)
            .map((opt: HTMLOptionElement) => opt.value),
    );
  };
  const handleSelectClick = (e: MouseEvent<HTMLSelectElement>) => {
    const options = [...e.currentTarget.children];
    console.log(
      options.filter((el) => el instanceof HTMLOptionElement && el.selected),
    );
  };

  return (
    <div className="select-container">
      <div className="select-group-container">
        <label>
          {props.label}
          <select
            name={props.fieldName}
            onChange={handleSelection}
            multiple={props.multiple}
            value={selection}
            onClick={handleSelectClick}
          >
            <option value="">Choose...</option>
            {options.map((option: OptionInterface) => (
              <Option
                key={`${props.fieldName}-${option.value}`}
                value={option.value}
                displayText={option.displayText}
              />
            ))}
          </select>
        </label>
      </div>
      <div>
        <span className="error">{errMsg}</span>
      </div>
    </div>
  );
};
Select.displayName = 'Select';
