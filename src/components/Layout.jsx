import React from "react";
import Navbar from "./Navbar";
import { AiFillDashboard } from "react-icons/ai";
import { FaHeadphones } from "react-icons/fa";
import { BsCartPlusFill } from "react-icons/bs";
import { BsFillBagPlusFill } from "react-icons/bs";

import { NavLink } from "react-router-dom";

const Layout = ({ children }) => {
  return (
    <div className="drawer">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* <!-- Page content here --> */}
        <Navbar />
        {children}
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer" className="drawer-overlay"></label>
        <div className="menu p-4 w-44 bg-base-100 text-base-content">
          <div className="flex  gap-3 items-center">
            <AiFillDashboard />
            <p>Dashboard</p>
          </div>
          <NavLink to="/">
            <button className="py-1 my-3 bg-base-300 w-full rounded">
              Dashboard
            </button>
          </NavLink>
          <div className="flex  gap-3 items-center">
            <FaHeadphones />
            <p>Products</p>
          </div>
        <NavLink to="/products">
        <button className="py-1 my-3 bg-base-300 w-full rounded">
            Products
          </button>
        </NavLink>
          <div className="flex  gap-3 items-center">
            <BsFillBagPlusFill />

            <p>Add Products</p>
          </div>
        <NavLink to="/add-products">
        <button className="py-1 my-3 bg-base-300 w-full rounded">
            Add Products
          </button>
        </NavLink>
          <div className="flex  gap-3 items-center">
            <BsCartPlusFill />
            <p>Cart-10</p>
          </div>
          <NavLink to="/cart">
          <button className="py-1 my-3 bg-base-300 w-full rounded">
            Cart-10
          </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Layout;
