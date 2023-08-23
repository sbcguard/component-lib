/* eslint-disable react/react-in-jsx-scope */
import type { Meta, StoryObj } from '@storybook/react';
import { FileInput } from '../../atoms/inputs';
//Commented code is for use with Typescript
const meta = {
  title: 'Form Elements/Inputs/Files',
  component: FileInput,
  tags: ['autodocs'],
  argTypes: {
    type: {
      options: ['file', 'image'],
      description: 'Input type attribute',
      control: { type: 'select' },
    },
    multiple: {
      description: 'Accept multiple files',
      control: { type: 'boolean' },
    },
    required: {
      description: 'Require not NULL for Submission',
      control: { type: 'boolean' },
    },
  },
} satisfies Meta<typeof FileInput>;

export default meta;

type Story = StoryObj<typeof meta>;
/**Allows for any form of input value with no input control. */
export const File: Story = {
  args: {
    type: 'file',
    required: false,
    multiple: false,
  },
  parameters: {
    controls: {
      exclude: /type/g,
    },
  },
};
/**Allows for only character values, no numbers. */
export const Image: Story = {
  args: {
    type: 'image',
    required: false,
    multiple: false,
  },
  parameters: {
    controls: {
      exclude: /type/g,
    },
  },
};
