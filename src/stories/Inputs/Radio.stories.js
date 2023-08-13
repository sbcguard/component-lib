/* eslint-disable react/react-in-jsx-scope */
//import type { Meta, StoryObj } from '@storybook/react'
import { RadioGroup } from '../../atoms/inputs/radio';
//Commented code is for use with Typescript
const meta /*: Meta<typeof Input>*/ = {
  title: 'Inputs/RadioGroup',
  component: RadioGroup,
  argTypes: {
    'Sample Radio Groups': {
      description: '',
      options: [],
      control: { type: 'select' },
    },
    'Radio Details': {
      description: 'Radio Settings',
      control: { type: 'number' },
    },
  },
};
export default meta;
//type Story = StoryObj<typeof Input>;
const Template = (args) => <RadioGroup {...args} />;
export const Default = Template.bind({});
Default.args = {
  'Number of Radios': 1,
};
