import React from 'react';
import { Button, FormBasic } from '../../atoms';
import { FormProps } from '../../../utils/FormTypes';
//Placing type before props spread will default to type and allow props
//to override type, inverse will not override type
export const Form = ({ children, ...props }: FormProps) => {
  const handleSubmit = () => {
    alert('Some submit function with POST fetch.');
  };
  return (
    <FormBasic {...props}>
      {children}
      <Button
        label="Submit"
        styleClass="primary"
        type="submit"
        onClick={handleSubmit}
      />
    </FormBasic>
  );
};
Form.displayName = 'Form';
