import React, { ChangeEvent, PropsWithChildren } from 'react';
import './Radio.css';
type RadioProps = {
  type: string;
  name: string;
  checked: boolean;
  value: string | number;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};
//Placing type before props spread will default to type and allow props
//to override type, inverse will not override type
export const Radio = ({
  children,
  ...props
}: PropsWithChildren<RadioProps>) => {
  return (
    <div>
      <input {...props} />
      <label className="radio-label">{children}</label>
    </div>
  );
};
Radio.displayName = 'Radio';
