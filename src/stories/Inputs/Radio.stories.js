/* eslint-disable react/react-in-jsx-scope */
//import type { Meta, StoryObj } from '@storybook/react'
import { RadioGroup } from '../../atoms/inputs/radio';
//Commented code is for use with Typescript
/** Radio Groups are used when there are multiple options, and at least one selection needs to be made. <br />*/
/** The constructor consist of 2 properties/arguements: <br />*/
/** fieldName - The name of the table field associated with this input. <br />*/
/** radios - An Array of objects representing each radios value and label. <br />*/
/** [ <br /> { <br /> value: 'TEST', <br /> label: 'Value to Display' <br /> } <br /> ] */
const meta /*: Meta<typeof Input>*/ = {
  title: 'Inputs/RadioGroup',
  component: RadioGroup,
  tags: ['autodocs'],
  argTypes: {
    fieldName: {
      description: 'Name of the table field/column.',
      control: { type: 'text' },
    },
  },
};
export default meta;
//type Story = StoryObj<typeof Input>;
const Template = (args) => <RadioGroup {...args} />;
export const Default = Template.bind({});
Default.args = {
  fieldName: 'TESTFIELDNAME',
};
export const YesNo = Template.bind({});
YesNo.args = {
  fieldName: 'FIELDNAME',
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
