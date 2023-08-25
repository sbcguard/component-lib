/* eslint-disable react/react-in-jsx-scope */
import type { Meta, StoryObj } from '@storybook/react';
import { CheckboxGroup } from '../../components/atoms/inputs/checkbox/CheckboxGroup';
//Commented code is for use with Typescript
/** Checkbox Groups are used when there are multiple options, and no selection is required. <br />*/
/** The constructor consist of 2 properties/arguements: <br />*/
/** fieldName - The name of the table field associated with this input. <br />*/
/** boxes - An Array of objects representing each checkbox value and label. <br />*/
/** [ <br />*/
/**&nbsp;&nbsp;&nbsp;&nbsp;{ <br />*/
/**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; value: 'TEST', <br />*/
/**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; label: 'Value to Display' <br />*/
/**&nbsp;&nbsp;&nbsp;&nbsp;} <br /> */
/**]*/
const meta = {
  title: 'Form Elements/Inputs/CheckboxGroup',
  component: CheckboxGroup,
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
    boxes: {
      description: 'Array of Checkbox Objects. Format: JSON',
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
} satisfies Meta<typeof CheckboxGroup>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Single: Story = {
  args: {
    label: 'Test: ',
    fieldName: 'FIELDNAME',
    boxes: [
      {
        value: 1,
        label: 'Sample',
        isChecked: false,
      },
    ],
  },
};

export const YesNo: Story = {
  args: {
    label: 'Test: ',
    fieldName: 'FIELDNAME',
    boxes: [
      {
        value: 'Y',
        label: 'Y',
        isChecked: false,
      },
      {
        value: 'N',
        label: 'N',
        isChecked: false,
      },
    ],
  },
};
