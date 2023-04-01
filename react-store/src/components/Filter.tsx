import { useSelector, useDispatch } from 'react-redux';
import { setType } from '../slices/typeSlice';
import { setSort } from '../slices/sortSlice';

export default function Filter() {
  const dispatch = useDispatch();
  let type = useSelector((state: any) => state?.type);
  let sort = useSelector((state: any) => state?.sort);

  return (
    <div>
      <div className='filter-sort'>
        Order{' '}
        <select
          value={sort}
          onChange={(e) => dispatch(setSort(e.target.value))}
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
          value={type}
          onChange={(e) => dispatch(setType(e.target.value))}
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
