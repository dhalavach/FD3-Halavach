import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Product, orderObject } from '../types/Types';
import axios from 'axios';
import { setOrders } from '../slices/ordersSlice';
import OrderListContainer from './OrderListContainer';

export default function OrdersList() {
  const dispatch = useDispatch();
  const [orders, setOrders] = useState<orderObject[]>([]);
  const [ordersLoaded, setOrdersLoaded] = useState(false);

  const fetchConfig = {
    PRODUCTS_URL: 'http://localhost:3000/products',
    ORDERS_URL: 'http://localhost:3000/orders',
    method: 'GET',
    headers: {
      Accept: 'application/json',
    },
  };
  const loadOrders = async () => {
    try {
      const response = await axios.get(fetchConfig.ORDERS_URL);
      // dispatch(setOrders(response.data));
      setOrders(response.data);
      // console.log(response.data);
      setOrdersLoaded(true);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    loadOrders();
  }, []);

  return (
    <>
      <h3 className='orders-list__heading'>List of orders</h3>
        {!ordersLoaded ? 'Loading...' : orders.map((order: any) => {
              return <OrderListContainer order={order} key={order.id} />;
            })}
    </>
  );
}
