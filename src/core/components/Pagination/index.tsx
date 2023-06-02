import React, {FC, useCallback, useMemo} from 'react';
import {PaginationPage} from './Page';
import {PaginationRestPage} from './Rest';
import {NavigateButton} from './NavigateButton';
import usePagination, {TItem, IPaginationParams} from 'UI/Pagination/usePagination';
import style from './style.less';
import cn from 'classnames';

interface IProps {
  count: number;
  onChange: (page: number) => void;
  page?: number;
  className?: string;
}

export const Pagination: FC<IProps> = ({page, count, onChange, className}) => {
  const params = useMemo(() => {
    const result: IPaginationParams = {count, onChange};

    if (page) {
      result.page = page;
    }

    return result;
  }, [count, page, onChange]);

  const {items} = usePagination(params);

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
    <div className={cn(style.pagination, className)}>
      <ul className={style.pages}>{renderItem(items)}</ul>
    </div>
  );
};
