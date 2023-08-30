import React, { useState, ChangeEvent, KeyboardEvent, FocusEvent } from 'react';
import { ErrorSpan } from '../../span/Error';
import { TextareaProperties } from '../../../../utils/FormTypes';
import { pholder, types } from '../../../../utils/constants';
import './Textarea.css';
//Placing type before props spread will default to type and allow props
//to override type, inverse will not override type
export const ControlledTextarea = ({ ...props }: TextareaProperties) => {
  const filteredProps = {
    ...props,
    fieldName: undefined,
  };
  const [errMsg, setErrMsg] = useState<string>('');
  const [text, setText] = useState<string>(props.value);
  const handleKeys = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    const { key } = e;
    const resolvedKey = key === ' ' ? 'Space' : key;
    if (
      !types.textarea.keys.test(resolvedKey) &&
      !['Delete', 'Backspace', 'ArrowLeft', 'ArrowRight'].includes(key)
    )
      e.preventDefault();
  };

  const handleInput = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const { currentTarget } = e;
    const { value } = currentTarget;
    setText(value);
    !types.textarea.value.test(value)
      ? setErrMsg(types.textarea.error)
      : setErrMsg('');
  };

  const validate = (e: FocusEvent<HTMLTextAreaElement>) => {
    const { currentTarget } = e;
    const { value, required } = currentTarget;
    const trimmedText = value.trim();
    !trimmedText.length && required
      ? setErrMsg('Input required.')
      : setErrMsg('');
    setText(trimmedText);
  };

  return (
    <React.Fragment>
      <textarea
        {...filteredProps}
        name={props.fieldName}
        required={true}
        spellCheck={true}
        placeholder={pholder.textarea}
        autoCorrect="on"
        onKeyDown={handleKeys}
        onChange={handleInput}
        value={text}
        onBlur={validate}
      />
      <ErrorSpan>{errMsg}</ErrorSpan>
    </React.Fragment>
  );
};
ControlledTextarea.displayName = 'ControlledTextarea';
