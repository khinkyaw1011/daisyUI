import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Layout from '../components/Layout';

const Details = () => {
  const [product,setProducts]=useState({});
  const {id}=useParams();
  const getProduct=async()=>{
    const {data}=await axios.get(`http://localhost:3000/products/${id}`);
    setProducts(data);
  }
  useEffect(()=>{
    getProduct();
  },[])
  return (
   <Layout>
    <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row">
    <img src={product.image} className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">Box Office News!</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
   </Layout>
  )
}

export default Details
