import React from 'react';

interface Props {
  type: string;
  name: string;
  id: string;
  value: string | number;
}

const Input = (props: Props) => {
  return <input className='form-input__checkbox' {...props} />;
};

export default Input;
