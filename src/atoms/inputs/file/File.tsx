import React, { useState, ChangeEvent } from 'react';
import { pholder, types } from '../../../utils/constants';
import { InputProps } from '../../../utils/FormTypes';
import './Input.css';

//Placing type before props spread will default to type and allow props
//to override type, inverse will not override type
export const File = ({ ...props }: InputProps) => {
  const [errMsg, setErrMsg] = useState<string>('');
  const [inputType] = useState<string>(props.type || '');
  const [error] = useState<string>(types[inputType].error);
  const [checkVal] = useState<RegExp>(types[inputType].value);
  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    const { target } = e;
    const { required, accept, files } = target;
    const acceptedFileTypes: string[] = accept
      ? accept.split(',').map((type) => type.trim())
      : ['*'];
    const regexCheck: boolean[] = [];
    if (files) {
      const fileTypeErr: string[] = [];
      for (const file of files) {
        const { name, type } = file;
        const isValidType =
          acceptedFileTypes[0] === '*'
            ? true
            : acceptedFileTypes.some((atype: string) =>
                atype.endsWith('/*')
                  ? type.startsWith(atype.slice(0, -2))
                  : type.includes(atype.replace('.', '')),
              );
        !isValidType &&
          fileTypeErr.push(
            `${name} - Invalid file type, ${type.toLowerCase()}.`,
          );
        regexCheck.push(checkVal.test(name));
      }
      required && !files
        ? setErrMsg(error)
        : required && files && fileTypeErr
        ? setErrMsg(fileTypeErr.join('\r\n'))
        : !required && files && fileTypeErr
        ? setErrMsg(fileTypeErr.join('\r\n'))
        : setErrMsg('');
      !fileTypeErr &&
        regexCheck.includes(false) &&
        setErrMsg(`Invalid ${inputType} name.`);
      if (fileTypeErr || regexCheck.includes(false)) target.value = '';
    }
  };
  return (
    <div className="input-container">
      <input
        /* Attributes above overridden by pass props */
        {...props}
        /* Attributes below preserved */
        placeholder={pholder[inputType]}
        onChange={handleInput}
      />
      <span className="error">{errMsg}</span>
    </div>
  );
};
File.displayName = 'File';
