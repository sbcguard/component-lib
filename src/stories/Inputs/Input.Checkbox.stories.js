import React from 'react';
import { Checkbox } from '../../atoms/inputs/index';

export default {
    title: 'Inputs/Checkbox',
    component: Checkbox
};
const Template = (args) => <Checkbox {...args} />;

export const Default = Template.bind({});