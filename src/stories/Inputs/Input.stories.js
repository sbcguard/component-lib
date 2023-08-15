/* eslint-disable react/react-in-jsx-scope */
//import type { Meta, StoryObj } from '@storybook/react'
import { Input } from '../../atoms/inputs';
import { types } from '../../utils/constants';
//Commented code is for use with Typescript
const meta /*: Meta<typeof Input>*/ = {
  title: 'Inputs/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    type: {
      options: Object.keys(types).filter(
        (opt) =>
          ![
            'file',
            'select-one',
            'select-multiple',
            'radio',
            'checkbox',
          ].includes(opt),
      ),
      description: 'Input type attribute',
      control: { type: 'select' },
    },
    maxLength: {
      description: 'Input value maximum length',
      control: { type: 'number' },
    },
    required: {
      description: 'Require not NULL for Submission',
      control: { type: 'boolean' },
    },
  },
};
export default meta;
//type Story = StoryObj<typeof Input>;
const Template = (args) => <Input {...args} />;
export const Default = Template.bind({});
Default.args = {
  type: 'number',
  required: false,
  maxLength: 15,
};
