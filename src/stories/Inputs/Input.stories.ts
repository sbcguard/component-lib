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
export const Alpha: Story = {
  args: {
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
export const Number: Story = {
  args: {
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
export const Range: Story = {
  args: {
    type: 'range',
    required: false,
    maxLength: 15,
  },
  parameters: {
    controls: {
      exclude: /type/g,
    },
  },
};
export const Integer: Story = {
  args: {
    type: 'int',
    required: false,
    maxLength: 15,
  },
  parameters: {
    controls: {
      exclude: /type/g,
    },
  },
};
export const Float: Story = {
  args: {
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
export const Date_MM_DD_YYYY: Story = {
  args: {
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
