import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import Layout from "../components/Layout";

const Edit = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");
  const navigate= useNavigate();
  
  const { id } = useParams();
  const getProduct = async () => {
    const { data } = await axios.get(`http://localhost:3000/products/${id}`);
    setTitle(data?.title);
    setPrice(data?.price);
    setDescription(data?.description);
    setCategory(data?.category);
    setImage(data?.image);

    //console.log(data);
  };
  const onSubmitHandler=async(e)=>{
    e.preventDefault();
    const pdata={title,price,description,category,image};
    await axios.patch(`http://localhost:3000/products/${id}`,pdata);
    navigate("/products")
    //console.log(pdata);
  }
  
  useEffect(() => {
    getProduct();
  }, []);
  return (
    <Layout>
      <form onSubmit={onSubmitHandler} className="hero min-h-screen bg-base-300">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Edit Product!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Title</span>
                </label>
                <input
                  type="text"
                  placeholder="product title"
                  className="input input-bordered"
                   value={title}
                   onChange={e=>setTitle(e.target.value)}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">price</span>
                </label>
                <input
                  type="text"
                  placeholder="price"
                  className="input input-bordered"
                  value={price}
                  onChange={e=>setPrice(e.target.value)}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Description</span>
                </label>
                <input
                  type="text"
                  placeholder="Description"
                  className="input input-bordered"
                   value={description}
                   onChange={e=>setDescription(e.target.value)}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Category</span>
                </label>
                <input
                  type="text"
                  placeholder="Category"
                  className="input input-bordered"
                   value={category}
                  onChange={e=>setCategory(e.target.value)}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">image</span>
                </label>
                <input
                  type="text"
                  placeholder="image"
                  className="input input-bordered"
                  value={image}
                  onChange={e=>setImage(e.target.value)}
                />
              </div>
              <div className="form-control mt-6">
                <div className="flex gap-5">
                  <Link to="/products">
                    <button className="btn btn-error">cancel</button>
                  </Link>
                  <button className="btn btn-primary">Edit</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </Layout>
  );
};

export default Edit;
