import React, { ChangeEvent } from 'react';
export type InputProps = InputProperties & React.HTMLProps<HTMLInputElement>;
export type FileInputProps = FileInputProperties &
  React.HTMLProps<HTMLInputElement>;

interface InputProperties {
  label: string;
  type: string;
  maxLength: number;
  required: boolean;
}
interface FileInputProperties {
  label: string;
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
export type CheckboxProps = {
  type: string;
  name: string;
  checked: boolean;
  value: string | number;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};
export type RadioGroupProps = {
  label: string;
  fieldName: string;
  radios: RadioInterface[];
};
export type CheckboxGroupProps = {
  label: string;
  fieldName: string;
  boxes: CheckboxInterface[];
};
export interface RadioInterface {
  value: string | number;
  label: string;
}
export interface CheckboxInterface {
  value: string | number;
  label: string;
}
