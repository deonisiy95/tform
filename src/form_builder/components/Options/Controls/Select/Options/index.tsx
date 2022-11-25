import React, {FC, useState} from 'react';
import style from './style.less';
import Icon from 'UI/Icon';
import Input from 'UI/Input';
import Button from 'UI/Button';
import cn from 'classnames';

interface IProps {
  options: string[];
  onChange: (options: string[]) => void;
}

export const SelectOptionsList: FC<IProps> = ({options, onChange}) => {
  const [editingItem, setEditingItem] = useState(-1);
  const [creating, setCreating] = useState(false);

  const editOption = (index: number) => (event: React.SyntheticEvent<HTMLInputElement>) => {
    const value = (event.target as HTMLInputElement).value?.trim();

    setEditingItem(-1);

    if (value && options[index] !== value) {
      const result = [...options];

      result[index] = value;
      onChange(result);
    }
  };

  const createOption = (event: React.SyntheticEvent<HTMLInputElement>) => {
    const value = (event.target as HTMLInputElement).value?.trim();

    setCreating(false);

    if (value) {
      const result = [...options];

      result.push(value);
      onChange(result);
    }
  };

  const deleteOption = (index: number) => () => {
    const result = [...options];

    result.splice(index, 1);

    onChange(result);
  };

  return (
    <div>
      <div className={cn(style.list, 'scroll')}>
        {options.map((item, index) =>
          editingItem !== index ? (
            <div className={style.item} key={index}>
              <div className={style.text}>{item}</div>
              <Icon type={'pen'} className={style.icon} onClick={() => setEditingItem(index)} />
              <Icon type={'cross'} className={style.icon} onClick={deleteOption(index)} />
            </div>
          ) : (
            <Input
              defaultValue={item}
              onEnter={editOption(index)}
              onBlur={editOption(index)}
              inline={true}
              autoFocus={true}
            />
          )
        )}
      </div>
      {creating ? (
        <Input onEnter={createOption} onBlur={createOption} inline={true} autoFocus={true} />
      ) : (
        <Button className={style.add} onClick={() => setCreating(true)}>
          {l10n('add')}
        </Button>
      )}
    </div>
  );
};
