import useSearchParamsState from '../hooks/useSearchParamsState';

export default function Filter() {
  const [filterParam, setFilterParam] = useSearchParamsState('filterParam', '');
  const [sortParam, setSortParam] = useSearchParamsState('sortParam', '');

  return (
    <div>
      <div className='filter-sort'>
        Order{' '}
        <select
          value={sortParam}
          onChange={(e) => setSortParam(e.target.value)}
        >
          <option value=''></option>
          <option value='az'>A-Z</option>
          <option value='za'>Z-A</option>
          <option value='ascending'>Price - ascending</option>
          <option value='descending'>Price - descending</option>
        </select>
      </div>

      <div className='filter-type'>
        Filter
        <select
          value={filterParam}
          onChange={(e) => setFilterParam(e.target.value)}
        >
          <option value=''>All</option>
          <option value='motherboard'>Motherboard</option>
          <option value='CPU'>CPU</option>
          <option value='GPU'>GPU</option>
          <option value='PSU'>PSU</option>
        </select>
      </div>
    </div>
  );
}
