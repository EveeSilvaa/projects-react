import React from 'react';

import { InputContainer } from './styles';

function Input ({value, onChage}) {
  return (
    <InputContainer>
        <input value={value} onChange={onChage}/>
    </InputContainer>
  )
}

export default Input;