import React, { useState, ChangeEvent } from 'react';
import { ErrorSpan } from '../../span';
import { pholder, types } from '../../../../utils/constants';
import { FileInputProps } from '../../../../utils/FormTypes';
import './File.css';

//Placing type before props spread will default to type and allow props
//to override type, inverse will not override type
export const ControlledFile = ({ ...props }: FileInputProps) => {
  const [errMsg, setErrMsg] = useState<string>('');
  const [inputType] = useState<string>('file');
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
    <React.Fragment>
      <input
        /* Attributes above overridden by pass props */
        {...props}
        type="file"
        /* Attributes below preserved */
        placeholder={pholder[inputType]}
        onChange={handleInput}
      />
      <ErrorSpan>{errMsg}</ErrorSpan>
    </React.Fragment>
  );
};
ControlledFile.displayName = 'ControlledFile';
