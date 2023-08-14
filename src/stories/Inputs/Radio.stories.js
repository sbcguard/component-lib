/* eslint-disable react/react-in-jsx-scope */
//import type { Meta, StoryObj } from '@storybook/react'
import { RadioGroup } from '../../atoms/inputs/radio';
//Commented code is for use with Typescript
const meta /*: Meta<typeof Input>*/ = {
  title: 'Inputs/RadioGroup',
  component: RadioGroup,
  argTypes: {
    fieldName: {
      description: 'Name of the table field/column.',
      control: { type: 'text' },
    },
    radios: {
      description:
        'Array of objects containing radio options in value/label pairs. Where the value is the submitted value and label is the displayed text associated to the radio input',
      options: ['Yes/No', 'Example', 'Example 2', 'Custom'],
      mapping: {
        'Yes/No': [
          {
            value: 'Y',
            label: 'Y',
          },
          {
            value: 'N',
            label: 'N',
          },
        ],
        Example: [
          {
            value: 'SOMETESTVALUE',
            label: 'Displayed Value',
          },
        ],
        'Example 2': [
          {
            value: 'TEST1',
            label: 'Option 1',
          },
          {
            value: 'TEST2',
            label: 'Option 2',
          },
          {
            value: 'TEST3',
            label: 'Option 3',
          },
          {
            value: 'TEST4',
            label: 'Option 4',
          },
        ],
        Custom: '',
      },
      control: { type: 'select' },
    },
    radiosObject: {
      description:
        'Array of object representing the radios to be created. Only used in Storybook.',
      control: { type: 'text' },
      if: { arg: 'radios', eq: 'Custom' },
    },
  },
};
export default meta;
//type Story = StoryObj<typeof Input>;
const Template = (args) => <RadioGroup {...args} />;
export const Default = Template.bind({});
Default.args = {
  fieldName: 'TESTFIELDNAME',
  radios: [
    {
      value: 'Y',
      label: 'Y',
    },
    {
      value: 'N',
      label: 'N',
    },
  ],
};
