import axios from "axios";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import Card from "../components/Card";
import Layout from "../components/Layout";

const Products = () => {
  const [products, setProduct] = useState([]);
  const cartItems=JSON.parse(localStorage.getItem("cartItem"));
  const [cart,setCart]=useState(cartItems ? [...cartItems]: []);
  
  console.log(cart);
  const addToCart = (product) => {
    setCart([...cart, product]);
    localStorage.setItem("cartItems",JSON.stringify([...cart,product]));
  };
  const removeFromCart = (id) => {
    setCart(cart?.filter((item) => item.id !== id));
    localStorage.setItem("cartItems",JSON.stringify(cart?.filter((item) => item.id !== id)));
  };
  const fetchproducts = async () => {
    const { data } = await axios.get("http://localhost:3000/products");
    // console.log(data);
    setProduct(data);
  };
  
  const deleteProduct = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        Swal.fire(await axios.delete(`http://localhost:3000/products/${id}`));
      }
    });

    //console.log(data);
  };
  useEffect(() => {
    fetchproducts();
  }, []);
  return (
    <Layout>
      <div className="flex flex-wrap gap-5 justify-center items-center mb-10">
        {products?.map((product) => (
          <Card
            key={product?.id}
            product={product}
            deleteProduct={deleteProduct}
            addToCart={addToCart}
            removeFromCart={removeFromCart}
          />
        ))}
      </div>
    </Layout>
  );
};

export default Products;
