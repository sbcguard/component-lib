/* eslint-disable react/react-in-jsx-scope */
import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from '../../components/atoms/inputs/checkbox';
//Commented code is for use with Typescript
/** Radios submitted their value when selected. Typically used in a group of radios where at lease 1 selection is required. <br />*/
/** The constructor consist of 3 properties/arguements: <br />*/
/** name - The name of the table field associated with this input. <br />*/
/** value - Value submitted with the field when radio is selected/checked. <br />*/
/** children (label) - Displayed value of the radio label. <br />*/
const meta = {
  title: 'Form Elements/Inputs/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  argTypes: {
    name: {
      description: 'Field name associated with the checkbox.',
      control: { type: 'text' },
    },
    value: {
      description: 'Value submitted by a checked checkbox.',
      control: { type: 'text' },
    },
    children: {
      description: 'Displayed label value of the checkbox.',
      control: { type: 'text' },
    },
  },
} satisfies Meta<typeof Checkbox>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Single: Story = {
  args: {
    name: 'Field Name',
    isChecked: false,
    value: 'TEST',
    children: 'TEST',
  },
};
