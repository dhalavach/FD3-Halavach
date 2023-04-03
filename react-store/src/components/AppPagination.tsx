import React, { useEffect, useState } from 'react';
import { Box, Pagination } from '@mui/material';
import service from '../services/service';
import productsSlice from '../slices/productsSlice';
import filteredProductsSlice from '../slices/filteredProductsSlice';
import { useSelector } from 'react-redux';
import useSearchParamsState from '../hooks/useSearchParamsState';

export default function AppPagination(props: any) {
  const pageSize = 10;
  const { setDisplayedProducts } = props;
  const [pageParam, setPageParam] = useSearchParamsState('pageParam', '1');
  const [fromParam, setFromParam] = useSearchParamsState('fromParam', '0');
  const [toParam, setToParam] = useSearchParamsState(
    'fromParam',
    pageSize.toString()
  );
  const [countParam, setCountParam] = useSearchParamsState('countParam', '0');

  // const [pagination, setPagination] = useState({
  //   count: 0,
  //   from: 0,
  //   to: pageSize,
  // });

  const products = useSelector((state: any) => state.products);
  let filteredProducts = useSelector((state: any) => state.filteredProducts);

  // useEffect(() => {
  //   setPagination({ ...pagination, count: products.length });
  //   setDisplayedProducts(products.slice(pagination.from, pagination.to));
  // }, [pagination.from, pagination.to, products]);

  // const handlePageChange = (event: any, page: number) => {
  //   const from = (page - 1) * pageSize;
  //   const to = (page - 1) * pageSize + pageSize;
  //   setPagination({ ...pagination, from: from, to: to });
  // };

  useEffect(() => {
    setCountParam(filteredProducts.length.toString());
    // let newProducts = [...products];
    let newProducts = [...filteredProducts];
    setDisplayedProducts(
      newProducts.slice(
        (parseInt(pageParam) - 1) * pageSize,
        (parseInt(pageParam) - 1) * pageSize + pageSize
      )
    );
  }, [pageParam, filteredProducts, products]);

  const handlePageChange = (event: any, page: number) => {
    // const from = (page - 1) * pageSize;
    // const to = (page - 1) * pageSize + pageSize;
    // setFromParam(from.toString());
    // setToParam(to.toString());
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
