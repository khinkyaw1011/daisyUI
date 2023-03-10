import React from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  AiTwotoneDelete,
  AiTwotoneEdit,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { CiCircleRemove } from "react-icons/ci";



const Card = ({ product, deleteProduct, addToCart, removeFromCart }) => {
  const cartItems=JSON.parse(localStorage.getItem("cartItems"));

  const navigate = useNavigate();
  const goDetails = (e) => {
    e.stopPropagation();
    navigate(`/products/details/${product?.id}`);
  };
  return (
    //<Link to={`/products/details/${product?.id}`}>
    <div
      onClick={goDetails}
      className="card w-96 bg-white text-black  shadow-xl cursor-pointer"
    >
      <div className="card-body">
        <img src={product.image} className="h-20 mx-auto" alt="" />
        <h2 className="card-title truncate">{product.title}</h2>
        <p className="truncate">{product.description}</p>

        <div className="card-actions justify-between items-center">
        <p className="text-xl font-bold">$ {product.price}</p>
         
          {
            cartItems?.find((item)=> item.id === product.id) ? (
          <button
              className="btn btn-accent btn-sm text-white"
              onClick={(e) => {
                e.stopPropagation();
                removeFromCart(product.id);
              }}
            >
              <CiCircleRemove />
            </button>):(<button
              className="btn btn-secondary btn-sm text-white"
              onClick={(e) => {
                e.stopPropagation();
                addToCart({...product,qty:1});
              }}
            >
              <AiOutlineShoppingCart />
            </button> )
          }
          
         
          <button
           onClick={(e)=>{
            e.stopPropagation();
            e.deleteProduct(product.id)
           }}
            className="btn btn-error btn-sm text-white"
          >
            <AiTwotoneDelete />
          </button>
          <Link to={`/products/edit/${product.id}`}>
            <button
            onClick={(e)=>
            e.stopPropagation()}
            
              state={{ product }}
              className="btn btn-success btn-sm text-white"
            >
              <AiTwotoneEdit />
            </button>
          </Link>
        </div>
      </div>
    </div>
    //</Link>
  );
};

export default Card;
