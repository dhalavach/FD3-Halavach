import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Product } from '../types/Types';

export default function OrdersList() {
  const orders = useSelector((state: any) => state.orders.ordersArr);

  return (
    <>
      <h3 className="orders-list__heading">List of orders</h3>
      <div>
        {
          <div className='orders-list__order-box'>
            {orders.map((order: any) => {
              return (
                <div className='orders-list__order-container'>
                  <ul>
                    <li>Name: {order.name}</li>
                    <li>Email: {order.email}</li>
                    <li>Address: {order.address}</li>
                    <li>
                      {order.orderedProducts.map((p: Product) => {
                        return (
                          <div>
                            {p.itemName} x {p.count}
                          </div>
                        );
                      })}
                    </li>
                  </ul>
                </div>
              );
            })}
          </div>
        }
      </div>
    </>
  );
}
