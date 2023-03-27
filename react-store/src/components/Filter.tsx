export default function Filter(props: any) {
  const { count, type, sortProducts, filter, sort } = props;
  return (
    <div>
      <div className='filter-result'>{count} Product(s)</div>
      <div className='filter-sort'>
        Order{' '}
        <select value={sort} onChange={sortProducts}>
          <option value="az">A-Z</option>
          <option value="za">Z-A</option>
          <option value='ascending'>Price - ascending</option>
          <option value='descending'>Price - descending</option>
        </select>
      </div>

      <div className='filter-type'>
        Filter
        <select value={type} onChange={filter}>
          <option value='all'>All</option>
          <option value='motherboard'>Motherboard</option>
          <option value='CPU'>CPU</option>
          <option value='GPU'>GPU</option>
          <option value='PSU'>PSU</option>
        </select>
      </div>
    </div>
  );
}
