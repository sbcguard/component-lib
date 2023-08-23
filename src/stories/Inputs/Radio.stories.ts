/* eslint-disable react/react-in-jsx-scope */
import type { Meta, StoryObj } from '@storybook/react';
import { Radio } from '../../components/atoms/inputs/radio';
//Commented code is for use with Typescript
/** Radios submitted their value when selected. Typically used in a group of radios where at lease 1 selection is required. <br />*/
/** The constructor consist of 3 properties/arguements: <br />*/
/** name - The name of the table field associated with this input. <br />*/
/** value - Value submitted with the field when radio is selected/checked. <br />*/
/** children (label) - Displayed value of the radio label. <br />*/
const meta = {
  title: 'Form Elements/Inputs/Radio',
  component: Radio,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: { disable: true },
    },
    name: {
      description: 'Field name associated with the radio.',
      control: { type: 'text' },
    },
    value: {
      description: 'Value submitted by a checked radio.',
      control: { type: 'text' },
    },
    children: {
      description: 'Displayed label value of the radio.',
      control: { type: 'text' },
    },
  },
} satisfies Meta<typeof Radio>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Single: Story = {
  args: {
    type: 'radio',
    name: 'Field Name',
    checked: true,
    value: 'TEST',
    children: 'TEST',
  },
};
