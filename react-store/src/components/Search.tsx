import { ChangeEvent } from 'react';
import useSearchParamsState from '../hooks/useSearchParamsState';

export default function Search() {
  const [searchQueryParam, setSearchQueryParam] = useSearchParamsState('searchQueryParam', '');

  const handleSearchInput = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchQueryParam(e.target.value);
  };

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
        onChange={handleSearchInput}
      />
    </div>
  );
}
