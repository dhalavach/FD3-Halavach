import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Product } from '../types/Types';
import axios from 'axios';
import { setOrders } from '../slices/ordersSlice';

export default function OrdersList() {
  const dispatch = useDispatch();
  // const orders = useSelector((state: any) => state.orders.ordersArr);
  //const orders = useSelector((state: any) => state.orders.ordersArr) || [];
  const [orders, setOrders] = useState([]);
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
      console.log(response.data);
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
      <div>
        {!ordersLoaded ? (
          'Loading...'
        ) : (
          <div className='orders-list__order-box'>
            {orders?.map((order: any) => {
              return (
                <div className='orders-list__order-container' key={order?.id}>
                  <ul>
                    <li>Name: {order?.name}</li>
                    <li>Email: {order?.email}</li>
                    <li>Address: {order?.address}</li>
                    <li>
                      {order?.orderedProducts?.map((p: Product) => {
                        return (
                          <div>
                            {p?.itemName} x {p?.count}
                          </div>
                        );
                      })}
                    </li>
                  </ul>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
}
