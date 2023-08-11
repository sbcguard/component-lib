import React from 'react';
import type { Meta, StoryFn } from '@storybook/react';
import { Button } from '../buttons/Button';


export default {
  title: 'Example/Button',
  component: Button
} as Meta;

const Template: StoryFn = (args) => <Button {...args} />;

export const Default = Template.bind({});
