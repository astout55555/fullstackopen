import { useState } from 'react';

export const useField = (type) => {
  const [value, setValue] = useState('')

  const onChange = (event) => {
    setValue(event.target.value)
  }

  const reset = () => {
    setValue('');
  }

  return {
    reset,
    value,
    props: {
      type,
      value,
      onChange,
    }
  }

}

// modules can have several named exports

// export const useAnotherHook = () => {
//   // ...
// }