/* eslint-disable react/react-in-jsx-scope */
import type { Meta, StoryObj } from '@storybook/react';
import { Select } from '../../components';
//Commented code is for use with Typescript
/** Selects are used when there are multiple options, and many selections are possible. <br />*/
/** The constructor consist of 4 properties/arguements: <br />*/
/** label - Displayed text to label the select element. <br />*/
/** fieldName - The name of the table field associated with this input. <br />*/
/** multiple - Boolean value to enable or disable multiple option selection. <br />*/
/** options - An Array of objects representing each option for the dropdown. <br />*/
/** [ <br />*/
/**&nbsp;&nbsp;&nbsp;&nbsp;{ <br />*/
/**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; value: 'TEST', <br />*/
/**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; displayText: 'Option textContent' <br />*/
/**&nbsp;&nbsp;&nbsp;&nbsp;} <br /> */
/**]*/
const meta = {
  title: 'Form Elements/Inputs/Select',
  component: Select,
  tags: ['autodocs'],
  argTypes: {
    label: {
      description: 'Label value for the Select input.',
      control: { type: 'text' },
    },
    fieldName: {
      description: 'Name of the table field/column.',
      control: { type: 'text' },
    },
    required: {
      description: 'Required for form submission.',
      control: { type: 'boolean' },
    },
    multiple: {
      description: 'Allow multiple option selection.',
      control: { type: 'boolean' },
    },
    options: {
      description: 'Array of select option objects. Format: JSON',
      control: {
        type: 'object',
        properties: {
          value: {
            type: 'text',
            default: 'test',
          },
          displayText: {
            type: 'text',
            default: 'test',
          },
        },
      },
    },
  },
} satisfies Meta<typeof Select>;

export default meta;

type Story = StoryObj<typeof meta>;

export const SingleSelect: Story = {
  args: {
    label: 'Test: ',
    fieldName: 'FIELDNAME',
    multiple: false,
    required: false,
    options: [
      {
        value: 1,
        displayText: 'Sample',
      },
    ],
  },
};

export const MultiSelect: Story = {
  args: {
    label: 'Test: ',
    fieldName: 'SOMEFIELDNAME',
    required: false,
    multiple: true,
    options: [
      {
        value: 1,
        displayText: 'Option ',
      },
      {
        value: 2,
        displayText: 'Option 2',
      },
      {
        value: 3,
        displayText: 'Option 3',
      },
    ],
  },
};
