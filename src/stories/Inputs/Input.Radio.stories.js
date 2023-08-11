import React from 'react';
import { Radio } from '../../atoms/inputs/index';

export default {
    title: 'Inputs/Radios',
    component: Radio
};
const RadioTemp = (args) => <Radio {...args} />;

export const Default = RadioTemp.bind({});