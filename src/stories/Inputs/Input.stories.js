//import type { Meta, StoryObj } from '@storybook/react'
import { Input } from '../../atoms/inputs';
//import { placeholder, types } from '../../utils/constants';
//Commented code is for use with Typescript
const meta/*: Meta<typeof Input>*/ = {
  title: 'Inputs/Input',
  component: Input,
  argTypes: {
    type: {
      description: 'Native/Custom Type Attribute',
      options: ['text','number','date','time'],
      control: { type : 'select'},
    },
    placeholder: {
      description: 'Placeholder value',
      control: { type: 'text' }
    },
    required: {
      description: 'Require not NULL for Submission',
    }
  },
};
export default meta;
//type Story = StoryObj<typeof Input>;

export const Default/*: Story*/ = {
  args: {
    type: 'text',
    placeholder: 'Enter a text value...',
    required: false
  },
}