/* eslint-disable react/react-in-jsx-scope */
import type { Meta, StoryObj } from '@storybook/react';
import { Input } from '../../components/atoms';
import { types } from '../../utils/constants';
//Commented code is for use with Typescript
const meta = {
  title: 'Form Elements/Inputs/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    label: {
      description: 'Label value for the Radio group.',
      control: { type: 'text' },
    },
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
/**Allows for any form of input value with no input control. */
export const Text: Story = {
  args: {
    label: 'Test: ',
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
/**Allows for only character values, no numbers. */
export const Alpha: Story = {
  args: {
    label: 'Test: ',
    type: 'alpha',
    required: false,
    maxLength: 15,
  },
  parameters: {
    controls: {
      exclude: /type/g,
    },
  },
};
/**Allows for integer values only. */
export const Number: Story = {
  args: {
    label: 'Test: ',
    type: 'number',
    required: false,
    maxLength: 15,
  },
  parameters: {
    controls: {
      exclude: /type/g,
    },
  },
};
/**Allows for whole number with range selector. */
export const Range: Story = {
  args: {
    label: 'Test: ',
    type: 'range',
    required: false,
    maxLength: 15,
    min: 0,
    max: 15,
    step: 1,
  },
  parameters: {
    controls: {
      exclude: /type/g,
    },
  },
};
/**Allows for a decimal value. */
export const Float: Story = {
  args: {
    label: 'Test: ',
    type: 'float',
    required: false,
    maxLength: 15,
  },
  parameters: {
    controls: {
      exclude: /type/g,
    },
  },
};
/**Allows for picking color values (#000000) */
export const Color: Story = {
  args: {
    label: 'Test: ',
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
    label: 'Test: ',
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
export const Date_MM_DD_YYYY: Story = {
  args: {
    label: 'Test: ',
    type: 'datemmddyyyy',
    required: false,
    maxLength: 15,
  },
  parameters: {
    controls: {
      exclude: /type/g,
    },
  },
};
export const Date_YYYY_MM_DD: Story = {
  args: {
    label: 'Test: ',
    type: 'dateyyyymmdd',
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
    label: 'Test: ',
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
export const Time: Story = {
  args: {
    label: 'Test: ',
    type: 'time',
    required: false,
    maxLength: 15,
  },
  parameters: {
    controls: {
      exclude: /type/g,
    },
  },
};
export const Timestamp: Story = {
  args: {
    label: 'Test: ',
    type: 'timestamp',
    required: false,
    maxLength: 15,
  },
  parameters: {
    controls: {
      exclude: /type/g,
    },
  },
};
export const Month: Story = {
  args: {
    label: 'Test: ',
    type: 'month',
    required: false,
    maxLength: 15,
  },
  parameters: {
    controls: {
      exclude: /type/g,
    },
  },
};
export const Week: Story = {
  args: {
    label: 'Test: ',
    type: 'week',
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
    label: 'Test: ',
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
export const Password: Story = {
  args: {
    label: 'Test: ',
    type: 'password',
    required: false,
    maxLength: 15,
  },
  parameters: {
    controls: {
      exclude: /type/g,
    },
  },
};
/**TODO: Develop number masking, possibly via useRef */
export const SSN: Story = {
  args: {
    label: 'Test: ',
    type: 'ssn',
    required: false,
    maxLength: 15,
  },
  parameters: {
    controls: {
      exclude: /type/g,
    },
  },
};
export const Search: Story = {
  args: {
    label: 'Test: ',
    type: 'search',
    required: false,
    maxLength: 15,
  },
  parameters: {
    controls: {
      exclude: /type/g,
    },
  },
};
export const Telephone: Story = {
  args: {
    label: 'Test: ',
    type: 'tel',
    required: false,
    maxLength: 15,
  },
  parameters: {
    controls: {
      exclude: /type/g,
    },
  },
};
export const URL: Story = {
  args: {
    label: 'Test: ',
    type: 'url',
    required: false,
    maxLength: 15,
  },
  parameters: {
    controls: {
      exclude: /type/g,
    },
  },
};
export const URL_Http: Story = {
  args: {
    label: 'Test: ',
    type: 'urlhttp',
    required: false,
    maxLength: 15,
  },
  parameters: {
    controls: {
      exclude: /type/g,
    },
  },
};
export const URL_Partial: Story = {
  args: {
    label: 'Test: ',
    type: 'urlpart',
    required: false,
    maxLength: 15,
  },
  parameters: {
    controls: {
      exclude: /type/g,
    },
  },
};
export const Hostname: Story = {
  args: {
    label: 'Test: ',
    type: 'hostname',
    required: false,
    maxLength: 15,
  },
  parameters: {
    controls: {
      exclude: /type/g,
    },
  },
};
export const Domain: Story = {
  args: {
    label: 'Test: ',
    type: 'domain',
    required: false,
    maxLength: 15,
  },
  parameters: {
    controls: {
      exclude: /type/g,
    },
  },
};
export const IP_Address: Story = {
  args: {
    label: 'Test: ',
    type: 'ip',
    required: false,
    maxLength: 15,
  },
  parameters: {
    controls: {
      exclude: /type/g,
    },
  },
};
export const Hidden: Story = {
  args: {
    label: 'Test: ',
    type: 'hidden',
    required: false,
    maxLength: 15,
  },
  parameters: {
    controls: {
      exclude: /type/g,
    },
  },
};
export const Currency: Story = {
  args: {
    label: 'Test: ',
    type: 'currency',
    required: false,
    maxLength: 15,
  },
  parameters: {
    controls: {
      exclude: /type/g,
    },
  },
};
export const Routing_Number: Story = {
  args: {
    label: 'Test: ',
    type: 'routing',
    required: false,
    maxLength: 15,
  },
  parameters: {
    controls: {
      exclude: /type/g,
    },
  },
};
export const CreditCard: Story = {
  args: {
    label: 'Test: ',
    type: 'cc',
    required: false,
    maxLength: 15,
  },
  parameters: {
    controls: {
      exclude: /type/g,
    },
  },
};
export const CCV: Story = {
  args: {
    label: 'Test: ',
    type: 'ccv',
    required: false,
    maxLength: 15,
  },
  parameters: {
    controls: {
      exclude: /type/g,
    },
  },
};
export const ParcelNumber: Story = {
  args: {
    label: 'Test: ',
    type: 'parcel',
    required: false,
    maxLength: 17,
  },
  parameters: {
    controls: {
      exclude: /type/g,
    },
  },
};
export const ZipCode: Story = {
  args: {
    label: 'Test: ',
    type: 'zip',
    required: false,
    maxLength: 5,
  },
  parameters: {
    controls: {
      exclude: /type/g,
    },
  },
};
export const ZipCode4: Story = {
  args: {
    label: 'Test: ',
    type: 'zip4',
    required: false,
    maxLength: 4,
  },
  parameters: {
    controls: {
      exclude: /type/g,
    },
  },
};
export const ZipCodeFull: Story = {
  args: {
    label: 'Test: ',
    type: 'zipfull',
    required: false,
    maxLength: 10,
  },
  parameters: {
    controls: {
      exclude: /type/g,
    },
  },
};
