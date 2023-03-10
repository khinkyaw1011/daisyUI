import React from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";
import Dashboard from "./Pages/Dashboard";
import Guard from "./components/Guard";
import Products from "./Pages/Products";
import Addproducts from "./Pages/Addproducts";
import Cart from "./Pages/Cart";
import Edit from "./Pages/Edit";
import Details from "./Pages/Details";
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/"
          element={
            <Guard>
              <Dashboard />
            </Guard>
          }
        />
        <Route
          path="/products"
          element={
            <Guard>
              <Products />
            </Guard>
          }
        />
        <Route
          path="/add-products"
          element={
            <Guard>
              <Addproducts />
            </Guard>
          }
        />
        <Route
          path="/cart"
          element={
            <Guard>
              <Cart />
            </Guard>
          }
        />
        <Route
          path="/products/edit/:id"
          element={
            <Guard>
              <Edit />
            </Guard>
          }
        />

        <Route
          path="/products/details/:id"
          element={
            <Guard>
              <Details />
            </Guard>
          }
        />
        <Route
          path="/products/details/:id"
          element={
            <Guard>
              <Cart />
            </Guard>
          }
        />
      </Routes>
    </div>
  );
};

export default App;
