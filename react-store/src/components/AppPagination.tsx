import React, { useEffect, useState } from 'react';
// import { Box, Pagination } from '@mui/material';
import Pagination from '@mui/material/Pagination';
import Box from '@mui/material/Box';

import { useSelector } from 'react-redux';
import useSearchParamsState from '../hooks/useSearchParamsState';

export default function AppPagination(props: any) {
  const pageSize = 10;
  const { setDisplayedProducts } = props;
  const [pageParam, setPageParam] = useSearchParamsState('pageParam', '1');
  const [countParam, setCountParam] = useState('0');

  const products = useSelector((state: any) => state.products);
  let filteredProducts = useSelector((state: any) => state.filteredProducts);

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

  const handlePageChange = (event: any, page: number) => {
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
