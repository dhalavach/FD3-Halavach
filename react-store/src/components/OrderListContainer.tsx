import { Product, orderObject } from "../types/Types";

export default function OrderListContainer(props: { order: orderObject }) {
  const { order } = props;
  return (
    <div className="orders-list__order-container" key={order.id}>
      <ul>
        <li>Name: {order.name}</li>
        <li>Email: {order.email}</li>
        <li>Address: {order.address}</li>
        <li>
          {order.orderedProducts.map((p: Product) => {
            return (
              <div key={order.id.toString() + p.itemName}>
                {p.itemName} x {p.count}
              </div>
            );
          })}
        </li>
      </ul>
    </div>
  );
}
