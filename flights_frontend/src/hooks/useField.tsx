import { useState } from 'react';

const useField = (type: string) => {
  const [value, setValue] = useState('');

  const onChange = (event: React.ChangeEvent) => {
    setValue(event.target.value);
  } // apparently ChangeEvent is too broad to assure a value property is present

  return {
    type,
    value,
    onChange
  };
}

export default useField;
