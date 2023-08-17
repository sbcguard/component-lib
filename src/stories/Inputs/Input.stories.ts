/* eslint-disable react/react-in-jsx-scope */
import type { Meta, StoryObj } from '@storybook/react';
import { Input } from '../../atoms/inputs';
import { types } from '../../utils/constants';
//Commented code is for use with Typescript
const meta = {
  title: 'Form Elements/Inputs/Input',
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
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Text: Story = {
  args: {
    type: 'text',
    required: false,
    maxLength: 15,
  },
  parameters: {
    controls: {
      exclude: /type/g,
    },
  },
};
export const Color: Story = {
  args: {
    type: 'color',
    required: false,
    maxLength: 15,
  },
  parameters: {
    controls: {
      exclude: /type/g,
    },
  },
};
export const Date: Story = {
  args: {
    type: 'date',
    required: false,
    maxLength: 15,
  },
  parameters: {
    controls: {
      exclude: /type/g,
    },
  },
};
export const Datetime_Local: Story = {
  args: {
    type: 'datetime-local',
    required: false,
    maxLength: 15,
  },
  parameters: {
    controls: {
      exclude: /type/g,
    },
  },
};
export const Email: Story = {
  args: {
    type: 'email',
    required: false,
    maxLength: 15,
  },
  parameters: {
    controls: {
      exclude: /type/g,
    },
  },
};
