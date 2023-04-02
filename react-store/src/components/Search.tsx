import React, { FunctionComponent } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { setSearchQuery } from '../slices/searchQuerySlice';
import useSearchParamsState from '../hooks/useSearchParamsState';

export default function Search() {
  // const dispatch = useDispatch();
  // let searchQuery = useSelector((state: any) => state?.searchQuery)
  const [searchQueryParam, setSearchQueryParam] = useSearchParamsState(
    'searchQueryParam',
    ''
  );
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
        onChange={(e) => setSearchQueryParam(e.target.value)}
      />
    </div>
  );
}
