import React, { useContext } from "react";
import { BrowserRouter, Redirect, Route } from 'react-router-dom';
import { Context } from "../context/AuthContext";
import { ToastContainer } from 'react-toastify';
import Landing from "../pages/Landing/Landing";

// function CustomRoute({ isPrivate, ...rest }) {
//   const { authenticated, loading } = useContext(Context);
//   if (loading) {
//     return <>Loading...</>
//   }

//   if (isPrivate === true && !authenticated) {
//     // return <Redirect to="/login" />
//   }
//   return <Route {...rest} />
// }
function Routes() {
  return (

    <BrowserRouter>
      <ToastContainer />
      <Route path="/" exact component={Landing} />
      {/* Root Route */}
      {/* <CustomRoute isPrivate path="/" exact component={Landing} /> */}

      {/* Login Route */}
      {/* <CustomRoute isPrivate={false} path="/login" exact component={Login} /> */}

      {/* Products Routes */}


    </BrowserRouter>
  );
}

export default Routes;