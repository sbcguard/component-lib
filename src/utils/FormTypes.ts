import { ChangeEvent } from 'react';
export type InputProps = {
  type: string;
  maxLength: number;
  required: boolean;
};
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
