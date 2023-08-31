/* eslint-disable react/react-in-jsx-scope */
import type { Meta, StoryObj } from '@storybook/react';
import { RadioGroup } from '../../../components';
//Commented code is for use with Typescript
/** Radio Groups are used when there are multiple options, and only one selection needs to be made. <br />*/
/** Intended for small number of options. For larger list, consider a select dropdown <br />*/
/** On standard form submission, only the selected option's value will submit. <br /><br />*/
/** The constructor consist of 2 properties/arguements: <br />*/
/** fieldName - The name of the table field associated with this input. <br />*/
/** radios - An Array of objects representing each radios value and label. <br />*/
/** [ <br />*/
/**&nbsp;&nbsp;&nbsp;&nbsp;{ <br />*/
/**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; value: 'TEST', <br />*/
/**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; label: 'Value to Display' <br />*/
/**&nbsp;&nbsp;&nbsp;&nbsp;} <br /> */
/**]*/
const meta = {
  title: 'Form Elements/Inputs/Radios',
  component: RadioGroup,
  tags: ['autodocs'],
  argTypes: {
    label: {
      description: 'Label value for the Radio group.',
      control: { type: 'text' },
    },
    fieldName: {
      description: 'Name of the table field/column.',
      control: { type: 'text' },
    },
    radios: {
      description: 'Array of Radio Objects. Format: JSON',
      control: {
        type: 'object',
        properties: {
          value: {
            type: 'text',
            default: 'test',
          },
          label: {
            type: 'text',
            default: 'test',
          },
        },
      },
    },
  },
} satisfies Meta<typeof RadioGroup>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Single: Story = {
  args: {
    label: 'Confirm? ',
    fieldName: 'Confirm',
    radios: [
      {
        value: 'Y',
        label: 'I confirm something',
      },
    ],
  },
};

export const YesNo: Story = {
  args: {
    label: 'Test: ',
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
  },
};
export const Three_Radios: Story = {
  args: {
    label: 'Test: ',
    fieldName: 'THREERADIOS',
    radios: [
      {
        value: 1,
        label: '1',
      },
      {
        value: 2,
        label: '2',
      },
      {
        value: 3,
        label: '3',
      },
    ],
  },
};
