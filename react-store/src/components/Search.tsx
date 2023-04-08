import { ChangeEvent, useState, useDeferredValue } from 'react';
import useSearchParamsState from '../hooks/useSearchParamsState';
// import { setSearchQuery } from '../slices/searchQuerySlice';
// import { debounce } from '../util';

export default function Search() {
  const [searchQueryParam, setSearchQueryParam] = useSearchParamsState(
    'searchQueryParam',
    ''
  );
  // const deferredValue = (value: any) =>  useDeferredValue(value)

  //let searchInputTimeout: any;

  const handleSearchInput = (val: string) => {
    setSearchQueryParam(val);
  };

  // const debouncedHandleSearchInput = debounce(handleSearchInput, 500);

  return (
    <div>
      Search{' '}
      <input
        name='search'
        id='search-box'
        type='search'
        placeholder='search products'
        value={searchQueryParam}
        data-testid='search__input-field'
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
          handleSearchInput(e.target.value);
        }}
      />
    </div>
  );
}
