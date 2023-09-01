/* eslint-disable react/react-in-jsx-scope */
import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '../../../components';
//Commented code is for use with Typescript
/**Buttons are used to perform some action on click. Either a form action, navigation, or trigger a page event (i.e. show/hide functionality).  */
/**<br /> */
/**There are 3 types of buttons: submit, reset, and button.  */
/**<br /> */
/**<br /> */
/**Submit - submits the form the button is contained in  */
/**<br /> */
/**Reset - Clears the form the button is contained in  */
/**<br /> */
/**Button - used when not performing a form action  */
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
      options: [
        'primary',
        'secondary',
        'back',
        'arrow',
        'success',
        'danger',
        'warning',
        'info',
        'light',
        'dark',
      ],
      description: 'Button style',
      control: { type: 'select' },
    },
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;
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
export const Submit: Story = {
  args: {
    label: 'Submit',
    type: 'submit',
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
export const Reset: Story = {
  args: {
    label: 'Reset',
    type: 'reset',
    styleClass: 'warning',
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
    label: 'Back',
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
export const Success: Story = {
  args: {
    label: 'Click Me',
    type: 'button',
    styleClass: 'success',
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

export const Danger: Story = {
  args: {
    label: 'Click Me',
    type: 'button',
    styleClass: 'danger',
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
export const Warning: Story = {
  args: {
    label: 'Click Me',
    type: 'button',
    styleClass: 'warning',
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
export const Info: Story = {
  args: {
    label: 'Click Me',
    type: 'button',
    styleClass: 'info',
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
export const Light: Story = {
  args: {
    label: 'Click Me',
    type: 'button',
    styleClass: 'light',
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
export const Dark: Story = {
  args: {
    label: 'Click Me',
    type: 'button',
    styleClass: 'dark',
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
