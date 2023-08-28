/* eslint-disable react/react-in-jsx-scope */
import type { Meta, StoryObj } from '@storybook/react';
import { Textarea } from '../../components/atoms';
//Commented code is for use with Typescript
/**This input element is used for large/lengthy text input, typically text input exceeding 30 characters.  */
const meta = {
  title: 'Form Elements/Inputs/Textarea',
  component: Textarea,
  tags: ['autodocs'],
  argTypes: {
    label: {
      description: 'Label value for the Radio group.',
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
    value: '',
  },
  parameters: {
    controls: {
      exclude: /value/g,
    },
  },
};
