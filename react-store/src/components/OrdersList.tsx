import { useEffect, useState } from 'react';
import { orderObject } from '../types/Types';
import axios from 'axios';
import OrderListContainer from './OrderListContainer';

export default function OrdersList() {
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
      setOrders(response.data);
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
      {!ordersLoaded
        ? 'Loading...'
        : orders.map((order: any) => {
            return <OrderListContainer order={order} key={order.id} />;
          })}
    </>
  );
}
