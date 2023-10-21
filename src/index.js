import React from "react";

import ReactDOM from "react-dom/client";


import App from "./components/App";
import Signup from "./components/Signup";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
  RouterProvider,
} from "react-router-dom";

import Signin from "./components/signin";

//react router field connection
const routers = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />}>
      <Route path="" element={<App />} />
      <Route path="Signin" element={<Signin />} />
      <Route path="Signup" element={<Signup />} />
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={routers} />
  </React.StrictMode>
);

function Layout() {
  return (
    <div>
      <Outlet />
    </div>
  );
}
