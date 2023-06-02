import {useState} from 'react';

export interface IPaginationParams {
  boundaryCount?: number;
  count?: number;
  defaultPage?: number;
  disabled?: boolean;
  hideNextButton?: boolean;
  hidePrevButton?: boolean;
  onChange?: (value: number) => void;
  page?: number;
  showFirstButton?: boolean;
  showLastButton?: boolean;
  siblingCount?: number;
}

export type TItem = {
  onClick: VoidFunction,
  type: 'page' | 'first' | 'last' | 'next' | 'previous' | 'end-ellipsis' | 'start-ellipsis';
  page: number;
  selected: boolean;
  disabled: boolean;
}

export default function usePagination(props?: IPaginationParams) {
  const {
    boundaryCount = 1,
    count = 1,
    defaultPage = 1,
    disabled = false,
    hideNextButton = false,
    hidePrevButton = false,
    onChange: handleChange,
    page: pageProp,
    showFirstButton = false,
    showLastButton = false,
    siblingCount = 1,
    ...other
  } = props ?? {};

  const [pageState, setPageState] = useState(defaultPage);
  const page = pageProp ? pageProp : pageState;

  const handleClick = value => {
    if (!pageProp) {
      setPageState(value);
    }
    if (handleChange) {
      handleChange(value);
    }
  };

  const range = (start, end) => {
    const length = end - start + 1;
    return Array.from({length}, (_, i) => start + i);
  };

  const startPages = range(1, Math.min(boundaryCount, count));
  const endPages = range(Math.max(count - boundaryCount + 1, boundaryCount + 1), count);

  const siblingsStart = Math.max(
    Math.min(page - siblingCount, count - boundaryCount - siblingCount * 2 - 1),
    boundaryCount + 2
  );

  const siblingsEnd = Math.min(
    Math.max(page + siblingCount, boundaryCount + siblingCount * 2 + 2),
    endPages.length > 0 ? endPages[0] - 2 : count - 1
  );

  const itemList = [
    ...(showFirstButton ? ['first'] : []),
    ...(hidePrevButton ? [] : ['previous']),
    ...startPages,

    ...(siblingsStart > boundaryCount + 2
      ? ['start-ellipsis']
      : boundaryCount + 1 < count - boundaryCount
        ? [boundaryCount + 1]
        : []),

    ...range(siblingsStart, siblingsEnd),

    ...(siblingsEnd < count - boundaryCount - 1
      ? ['end-ellipsis']
      : count - boundaryCount > boundaryCount
        ? [count - boundaryCount]
        : []),

    ...endPages,
    ...(hideNextButton ? [] : ['next']),
    ...(showLastButton ? ['last'] : [])
  ];

  const buttonPage = type => {
    switch (type) {
      case 'first':
        return 1;
      case 'previous':
        return page - 1;
      case 'next':
        return page + 1;
      case 'last':
        return count;
      default:
        return null;
    }
  };

  const items = itemList.map(item => {
    return typeof item === 'number'
      ? {
        onClick: () => {
          handleClick(item);
        },
        type: 'page',
        page: item,
        selected: item === page,
        disabled
      }
      : {
        onClick: () => {
          handleClick(buttonPage(item));
        },
        type: item,
        page: buttonPage(item),
        selected: false,
        disabled:
            disabled ||
            (item.indexOf('ellipsis') === -1 &&
              (item === 'next' || item === 'last' ? page >= count : page <= 1))
      };
  });

  return {
    items,
    ...other
  };
}
