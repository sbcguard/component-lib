import React, { ChangeEvent, MouseEvent } from 'react';
export type InputProps = InputProperties & React.HTMLProps<HTMLInputElement>;
export type FileInputProps = FileInputProperties &
  React.HTMLProps<HTMLInputElement>;
export type OptionProps = OptionInterface & React.HTMLProps<HTMLOptionElement>;

export type RadioProps = {
  name: string;
  checked: boolean;
  value: string | number;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onClick?: (e: MouseEvent<HTMLInputElement>) => void;
};
export type CheckboxProps = {
  name: string;
  isChecked: boolean;
  value: string | number;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};
export type SelectProps = {
  label: string;
  fieldName: string;
  required: boolean;
  multiple: boolean;
  options: OptionInterface[];
};
export type RadioGroupProps = {
  label: string;
  fieldName: string;
  radios: RadioInterface[];
};
export type CheckboxGroupProps = {
  label: string;
  fieldName: string;
  required: boolean;
  boxes: CheckboxInterface[];
};
export type TextareaProperties = {
  label: string;
  fieldName: string;
  required: boolean;
  value: string;
} & React.HTMLProps<HTMLTextAreaElement>;

export type ButtonProps = {
  label: string;
  type: 'button' | 'submit' | 'reset' | undefined;
  styleClass: string;
  onClick: (e: MouseEvent<HTMLButtonElement>) => void;
} & React.HTMLProps<HTMLButtonElement>;

export interface InputProperties {
  label: string;
  type: string;
  maxLength: number;
  required: boolean;
}
export interface FileInputProperties {
  label: string;
  multiple: boolean;
  required: boolean;
}
export interface OptionInterface {
  value: string | number;
  displayText: string;
}

export interface RadioInterface {
  value: string | number;
  label: string;
}
export interface CheckboxInterface {
  value: string | number;
  label: string;
  isChecked: boolean;
}
