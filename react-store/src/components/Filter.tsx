export default function Filter(props: any) {
  const { type, handleSortProducts, handleFilterProducts, sort } = props;
  return (
    <div>
      <div className='filter-sort'>
        Order{' '}
        <select value={sort} onChange={handleSortProducts}>
          <option value=''></option>
          <option value='az'>A-Z</option>
          <option value='za'>Z-A</option>
          <option value='ascending'>Price - ascending</option>
          <option value='descending'>Price - descending</option>
        </select>
      </div>

      <div className='filter-type'>
        Filter
        <select value={type} onChange={handleFilterProducts}>
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
