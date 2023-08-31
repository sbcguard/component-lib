/* eslint-disable react/react-in-jsx-scope */
import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '../../../components';
//Commented code is for use with Typescript
/**Buttons are used to perform some action on click. Either a form action, navigation, or trigger a page event.  */
const meta = {
  title: 'Form Elements/Controls/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    label: {
      description: 'Button text.',
      control: { type: 'text' },
    },
    type: {
      options: ['reset', 'submit', 'button'],
      description: 'Native HTML button type',
      control: { type: 'select' },
    },
    styleClass: {
      options: ['primary', 'secondary', 'alt', 'back', 'arrow'],
      description: 'Button style',
      control: { type: 'select' },
    },
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;
/**Allows file(s) to be uploaded. */
export const Primary: Story = {
  args: {
    label: 'Click Me',
    type: 'button',
    styleClass: 'primary',
    onClick: () => {
      alert('Some click function action.');
    },
  },
  parameters: {
    controls: {
      exclude: /onClick/g,
    },
  },
};
export const Secondary: Story = {
  args: {
    label: 'Click Me',
    type: 'button',
    styleClass: 'secondary',
    onClick: () => {
      alert('Some click function action.');
    },
  },
  parameters: {
    controls: {
      exclude: /onClick/g,
    },
  },
};
export const Alt: Story = {
  args: {
    label: 'Click Me',
    type: 'button',
    styleClass: 'alt',
    onClick: () => {
      alert('Some click function action.');
    },
  },
  parameters: {
    controls: {
      exclude: /onClick/g,
    },
  },
};
export const Back: Story = {
  args: {
    label: 'Click Me',
    type: 'button',
    styleClass: 'back',
    onClick: () => {
      alert('Some click function action.');
    },
  },
  parameters: {
    controls: {
      exclude: /onClick/g,
    },
  },
};
export const Arrow: Story = {
  args: {
    label: 'Click Me',
    type: 'button',
    styleClass: 'arrow',
    onClick: () => {
      alert('Some click function action.');
    },
  },
  parameters: {
    controls: {
      exclude: /onClick/g,
    },
  },
};
