import { ChangeEvent } from 'react';
import useSearchParamsState from '../hooks/useSearchParamsState';

const SORT_OPTIONS = [
  { value: '', label: 'Select order' },
  { value: 'az', label: 'A-Z' },
  { value: 'za', label: 'Z-A' },
  { value: 'ascending', label: 'Price - ascending' },
  { value: 'descending', label: 'Price - descending' },
];

const FILTER_OPTIONS = [
  { value: '', label: 'All' },
  { value: 'motherboard', label: 'Motherboard' },
  { value: 'CPU', label: 'CPU' },
  { value: 'GPU', label: 'GPU' },
  { value: 'PSU', label: 'PSU' },
];

export default function Filter() {
  const [filterParam, setFilterParam] = useSearchParamsState('filterParam', '');
  const [sortParam, setSortParam] = useSearchParamsState('sortParam', '');

  const handleSortChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSortParam(e.target.value);
  };

  const handleFilterChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setFilterParam(e.target.value);
  };

  return (
    <div>
      <div className='filter-sort'>
        Order{' '}
        <select value={sortParam} onChange={handleSortChange}>
          {SORT_OPTIONS.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      <div className='filter-type'>
        Filter{' '}
        <select value={filterParam} onChange={handleFilterChange} data-testid='filter-input'>
          {FILTER_OPTIONS.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
