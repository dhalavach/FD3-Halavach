import React, { FunctionComponent } from 'react';

export default function Search(props: any) {
  const { searchQuery, handleSearchProducts } = props;
  return (
    <div>
      Search{' '}
      <input
        name='search'
        id='search-box'
        type='search'
        placeholder='search products'
        value={searchQuery}
        onChange={handleSearchProducts}
      />
    </div>
  );
}
