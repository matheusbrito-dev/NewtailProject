import React, { useContext } from "react";
import { BrowserRouter, Redirect, Route } from 'react-router-dom';
import { Context } from "../context/AuthContext";
import Landing from "../pages/Landing";
import { ToastContainer } from 'react-toastify';

import Login from "../pages/Login";

import CreateProducts from "../pages/Product/Create";
import EditProducts from "../pages/Product/Edit";
import ListProducts from "../pages/Product/List";


function CustomRoute({ isPrivate, ...rest }) {
  const { authenticated, loading } = useContext(Context);
  if (loading) {
    return <>Loading...</>
  }

  if (isPrivate === true && !authenticated) {
    return <Redirect to="/login" />
  }
  return <Route {...rest} />
}
function Routes() {
  return (

    <BrowserRouter>
      <ToastContainer />
      {/* Root Route */}
      <CustomRoute isPrivate path="/" exact component={Landing} />

      {/* Login Route */}
      <CustomRoute isPrivate={false} path="/login" exact component={Login} />

      {/* Products Routes */}
      <CustomRoute isPrivate path="/product" exact component={ListProducts} />
      <CustomRoute isPrivate path="/product/create" exact component={CreateProducts} />
      <CustomRoute isPrivate path="/product/edit/:codigo" exact component={EditProducts} />


    </BrowserRouter>
  );
}

export default Routes;