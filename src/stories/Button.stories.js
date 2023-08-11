import React from 'react';
import { Button } from '../atoms/buttons/Button';

export default {
  title: 'Buttons/Button',
  component: Button,
};

const Template = (args) => <Button {...args}>TEST CHILDREN</Button>;

export const Default = Template.bind({});
