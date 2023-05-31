import React, {FC, useCallback} from 'react';
import {PaginationPage} from './Page';
import {PaginationRestPage} from './Rest';
import {NavigateButton} from './NavigateButton';
import usePagination, {TItem} from 'UI/Pagination/usePagination';
import style from './style.less';

interface IProps {
  count: number;
  onChange: (page: number) => void;
  page?: number;
}

export const Pagination: FC<IProps> = ({count, onChange}) => {
  const {items} = usePagination({count, onChange});

  const renderItem = useCallback((items: TItem[]) => {
    return items.map(item => {
      switch (item.type) {
        case 'page':
          return (
            <PaginationPage
              key={item.page}
              page={item.page}
              isActive={item.selected}
              onClick={item.onClick}
            />
          );
        case 'end-ellipsis':
        case 'start-ellipsis':
          return <PaginationRestPage key={item.type} />;
        case 'next':
          return (
            <NavigateButton
              type={'next'}
              key={item.type}
              onClick={item.onClick}
              disabled={item.disabled}
            />
          );
        case 'previous':
          return (
            <NavigateButton
              type={'prev'}
              key={item.type}
              onClick={item.onClick}
              disabled={item.disabled}
            />
          );
        default:
          return null;
      }
    });
  }, []);

  return (
    <div className={style.pagination}>
      <ul className={style.pages}>{renderItem(items)}</ul>
    </div>
  );
};
