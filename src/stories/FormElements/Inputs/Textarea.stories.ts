/* eslint-disable react/react-in-jsx-scope */
import type { Meta, StoryObj } from '@storybook/react';
import { Textarea } from '../../../components';
//Commented code is for use with Typescript
/**This input element is used for large/lengthy text input, typically text input exceeding 30 characters.  */
const meta = {
  title: 'Form Elements/Inputs/Textarea',
  component: Textarea,
  tags: ['autodocs'],
  argTypes: {
    label: {
      description: 'Label value for the Textarea.',
      control: { type: 'text' },
    },
    fieldName: {
      description: 'Fieldname associated with the input.',
      control: { type: 'text' },
    },
    required: {
      description: 'Require not NULL for Submission',
      control: { type: 'boolean' },
    },
  },
} satisfies Meta<typeof Textarea>;

export default meta;

type Story = StoryObj<typeof meta>;
/**Allows file(s) to be uploaded. */
export const TextArea: Story = {
  args: {
    label: 'Test: ',
    fieldName: 'SomeField',
    value: '',
    required: false,
  },
  parameters: {
    controls: {
      exclude: /value/g,
    },
  },
};
