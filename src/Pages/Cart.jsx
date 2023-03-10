import React, { useState } from "react";
import CartItem from "../components/CartItem";
import Layout from "../components/Layout";

const Cart = () => {
  const cartItems = JSON.parse(localStorage.getItem("cartItems"));
  const [cart, setCart] = useState(cartItems);

  const total = cart?.reduce((a, c) => a + c.price * c.qty, 0);

  const increment = (id) => {
    setCart(
      cart?.map((item) => {
        if (item.id === id) {
          item.qty += 1;
        }
        return item;
      })
    );
  };
  const decrement = (id) => {
    setCart(
      cart?.map((item) => {
        if (item.id === id && item.qty > 0) {
          item.qty -= 1;
        }
        return item;
      })
    );
  };
  return (
    <Layout>
      <div className="flex gap-10">
        <div className="">
          {cart?.map((item) => (
            <CartItem
              key={item?.id}
              item={item}
              increment={increment}
              decrement={decrement}
            />
          ))}
        </div>
        <div className="">
          <h1 className="text-2xl">Total Price - ${total.toFixed(2)} </h1>
        </div>
      </div>
    </Layout>
  );
};

export default Cart;
