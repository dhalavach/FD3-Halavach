import React, { useEffect, useState, ChangeEvent } from 'react';
import Pagination from '@mui/material/Pagination';
import Box from '@mui/material/Box';
import { useSelector } from 'react-redux';
import useSearchParamsState from '../hooks/useSearchParamsState';
import { Product, RootState } from '../types/Types';

export default function AppPagination(props: {
  setDisplayedProducts: (arr: Product[] | []) => void;
}) {
  const pageSize = 10;
  const { setDisplayedProducts } = props;
  const [pageParam, setPageParam] = useSearchParamsState('pageParam', '1');
  const [countParam, setCountParam] = useState('0');

  const products = useSelector((state: RootState) => state.products);
  let filteredProducts = useSelector(
    (state: RootState) => state.filteredProducts
  );

  useEffect(() => {
    setCountParam(filteredProducts.length.toString());
    let newProducts = [...filteredProducts];
    setDisplayedProducts(
      newProducts.slice(
        (parseInt(pageParam) - 1) * pageSize,
        (parseInt(pageParam) - 1) * pageSize + pageSize
      )
    );
  }, [pageParam, filteredProducts, products]);

  const handlePageChange = (event: ChangeEvent<unknown>, page: number) => {
    setPageParam(page.toString());
  };

  return (
    <>
      <Box
        justifyContent={'center'}
        alignItems={'center'}
        display={'flex'}
        sx={{
          margin: '20px 0px',
        }}
      ></Box>
      <Pagination
        page={parseInt(pageParam)}
        count={Math.ceil(parseInt(countParam) / pageSize)}
        onChange={handlePageChange}
      ></Pagination>
    </>
  );
}
