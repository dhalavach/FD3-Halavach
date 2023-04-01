import React, { FunctionComponent } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { setSearchQuery } from '../slices/searchQuerySlice';

export default function Search(props: any) {
  const dispatch = useDispatch();
  let searchQuery = useSelector((state: any) => state?.searchQuery)
  return (
    <div>
      Search{' '}
      <input
        name='search'
        id='search-box'
        type='search'
        placeholder='search products'
        value={searchQuery}
        onChange={(e) => dispatch(setSearchQuery(e.target.value))}
      />
    </div>
  );
}
