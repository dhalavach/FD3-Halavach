import React, { useEffect, useState, ChangeEvent } from 'react';
import Pagination from '@mui/material/Pagination';
import Box from '@mui/material/Box';
import { useSelector } from 'react-redux';
import useSearchParamsState from '../hooks/useSearchParamsState';
import { Product, RootState } from '../types/Types';

const PAGE_SIZE = 10;

export default function AppPagination({
  setDisplayedProducts,
}: {
  setDisplayedProducts: (arr: Product[] | []) => void;
}) {
  const [pageParam, setPageParam] = useSearchParamsState('pageParam', '1');
  const products = useSelector((state: RootState) => state.products);
  const filteredProducts = useSelector((state: RootState) => state.filteredProducts);

  const totalPages = Math.ceil(filteredProducts.length / PAGE_SIZE);

  useEffect(() => {
    const updateDisplayedProducts = () => {
      const startIdx = (parseInt(pageParam) - 1) * PAGE_SIZE;
      const paginatedProducts = filteredProducts.slice(startIdx, startIdx + PAGE_SIZE);
      setDisplayedProducts(paginatedProducts);
    };

    updateDisplayedProducts();
  }, [pageParam, filteredProducts, setDisplayedProducts]);

  const handlePageChange = (_: ChangeEvent<unknown>, page: number) => {
    setPageParam(page.toString());
  };

  return (
    <Box display='flex' justifyContent='center' alignItems='center' sx={{ margin: '20px 0' }}>
      <Pagination page={parseInt(pageParam)} count={totalPages} onChange={handlePageChange} />
    </Box>
  );
}
