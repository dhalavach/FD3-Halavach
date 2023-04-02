import React, { useEffect, useState } from 'react';
import { Box, Pagination } from '@mui/material';
import service from '../services/service';

export default function AppPagination(props: any) {
  const { setDisplayedProducts } = props;
  const pageSize = 10;
  const [pagination, setPagination] = useState({
    count: 0,
    from: 0,
    to: pageSize,
  });

  useEffect(() => {
    service.getData(pagination.from, pagination.to).then((response: any) => {
      setPagination({ ...pagination, count: response.count });
      setDisplayedProducts(response.data);
      console.log(response);
    });
  }, [pagination.from, pagination.to]);
  const handlePageChange = (event: any, page: number) => {
    const from = (page - 1) * pageSize;
    const to = (page - 1) * pageSize + pageSize;
    setPagination({ ...pagination, from: from, to: to });
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
        count={Math.ceil(pagination.count / pageSize)}
        onChange={handlePageChange}
      ></Pagination>
    </>
  );
}
