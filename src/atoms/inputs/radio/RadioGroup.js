import React, { useState, useMemo } from 'react';
import { Radio } from './Radio';
//import { types } from '../../../utils/constants'

export const RadioGroup = ({ ...props }) => {
  const [errMsg /*setErrMsg*/] = useState('');
  const [radios, setRadios] = useState([
    {
      name: 'Test',
      checked: false,
      value: 'Y',
      label: 'Y',
    },
  ]);
  useMemo(() => {
    props.radios && setRadios([...props.radios]);
  }, []);
  return (
    <div>
      {radios.map((radio) => (
        <Radio
          key={radio.name}
          name={radio.name}
          checked={radio.checked}
          value={radio.value}
        >
          {radio.label}{' '}
        </Radio>
      ))}
      <span className="error">{errMsg}</span>
    </div>
  );
};
RadioGroup.displayName = 'RadioGroup';
