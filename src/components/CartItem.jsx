import React from "react";

const CartItem = ({ item,increment,decrement }) => {
  return (
    <>
    <div className="card w-96 bg-base-300 shadow-xl mb-3">
      <div className="card-body">
        <div className="flex gap-3">
          <img src={item.image} className="h-20" alt="" />
          <div className="">
            <h1 className="mb-3 text-sm text-cyan-500">{item?.title}</h1>
            <p>${item?.price}</p>
            <div className="btn-group">
              <button onClick={()=>decrement(item?.id)} className="btn btn-error">-</button>
              <button className="btn">{item.qty}</button>
              <button onClick={()=>increment(item?.id)} className="btn btn-primary">+</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default CartItem;
