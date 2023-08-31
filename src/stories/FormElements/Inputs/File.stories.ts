/* eslint-disable react/react-in-jsx-scope */
import type { Meta, StoryObj } from '@storybook/react';
import { FileInput } from '../../../components';
//Commented code is for use with Typescript
/**This input element validates both the extension (via accept attribute) and the name (via RegEx) of file(s) uploaded.  */
const meta = {
  title: 'Form Elements/Inputs/Files',
  component: FileInput,
  tags: ['autodocs'],
  argTypes: {
    label: {
      description: 'Label value for the input.',
      control: { type: 'text' },
    },
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
    accept: {
      description:
        'List of accepted file extensions/mime typs. Comma delimited.',
      control: { type: 'text' },
    },
  },
} satisfies Meta<typeof FileInput>;

export default meta;

type Story = StoryObj<typeof meta>;
/**Allows file(s) to be uploaded. */
export const File: Story = {
  args: {
    label: 'Test: ',
    type: 'file',
    required: false,
    multiple: false,
    accept: '*',
  },
  parameters: {
    controls: {
      exclude: /type/g,
    },
  },
};
