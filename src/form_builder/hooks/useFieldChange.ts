import React, {useCallback} from 'react';

export const useFieldChange = <T extends {}>(
  type: string,
  value: T,
  onChange: (value: T) => void
) => {
  return useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = event.target.value?.trim();

      if (newValue === value[type]) {
        return;
      }

      onChange({
        ...value,
        [type]: newValue
      });
    },
    [value, onChange]
  );
};
