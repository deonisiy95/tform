import React, {useCallback, useState} from 'react';

export default function useInput(
  defaultValue: string = '',
  validators: Array<(value: string) => boolean> = []
) {
  const [invalid, setInvalid] = useState(false);
  const [value, setValue] = useState(defaultValue);

  const onChange: React.ChangeEventHandler<HTMLInputElement> = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = event.target.value;

      if (newValue !== value) {
        setValue(newValue);
      }

      if (validators.length > 0) {
        const existError = validators.some(validators => {
          return !validators(newValue);
        });

        setInvalid(existError);
      }
    },
    [value, validators]
  );

  return {
    value,
    onChange,
    invalid
  };
}
