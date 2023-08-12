import React, { useState } from 'react';
import { Radio } from './Radio';
import { types } from '../../../utils/constants'

export const RadioGroup = ({...props}) => {
const [errMsg, /*setErrMsg*/] = useState('');
    return <div>{props.radios.map(radio => <Radio key={radio.id} name={radio.name} checked={radio.checked} value={radio.value}>{radio.label} </Radio>)}<span className="error">{errMsg}</span></div>;
}
RadioGroup.displayName = 'RadioGroup'