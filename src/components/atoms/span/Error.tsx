import React, { PropsWithChildren } from 'react';
import './Error.css';
//Placing type before props spread will default to type and allow props
//to override type, inverse will not override type
export const ErrorSpan = ({ children, ...props }: PropsWithChildren) => {
  return (
    <span {...props} className="error">
      {children}
    </span>
  );
};
ErrorSpan.displayName = 'ErrorSpan';
