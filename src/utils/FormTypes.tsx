import React, { ChangeEvent } from 'react';
export type InputProps = InputProperties & React.HTMLProps<HTMLInputElement>;
export type FileInputProps = FileInputProperties &
  React.HTMLProps<HTMLInputElement>;

interface InputProperties {
  type: string;
  maxLength: number;
  required: boolean;
}
interface FileInputProperties {
  type: string;
  multiple: boolean;
  required: boolean;
}

export type RadioProps = {
  type: string;
  name: string;
  checked: boolean;
  value: string | number;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};
export type RadioGroupProps = {
  fieldName: string;
  radios: RadioInterface[];
};
export interface RadioInterface {
  value: string | number;
  label: string;
}
