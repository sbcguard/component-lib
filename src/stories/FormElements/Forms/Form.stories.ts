/* eslint-disable react/react-in-jsx-scope */
import type { Meta, StoryObj } from '@storybook/react';
import { Form } from '../../../components';
//Commented code is for use with Typescript
/**This is just a styled <form> where children are passed in to create the form content.  */
const meta = {
  title: 'Form Elements/Form',
  component: Form,
  tags: ['autodocs'],
  argTypes: {
    id: {
      description: 'Form ID.',
      control: { type: 'text' },
    },
    autoComplete: {
      descript: 'Enable/Disable autocomplete.',
      options: ['on', 'off'],
      control: { type: 'radio' },
    },
    name: {
      description: 'Form name attribute.',
      control: { type: 'text' },
    },
    method: {
      options: ['', 'GET', 'POST', 'OPTIONS', 'DELETE', 'TRACE'],
      description:
        'In React, method should not be used. Instead use a custom submit event handler function with a fetch.',
      control: { type: 'radio' },
    },
  },
} satisfies Meta<typeof Form>;

export default meta;

type Story = StoryObj<typeof meta>;
export const SampleForm: Story = {
  args: {
    id: 'Sample',
    autoComplete: 'off',
    name: 'Sample',
    method: '',
  },
  parameters: {
    controls: {
      exclude: /method/g,
    },
  },
};
