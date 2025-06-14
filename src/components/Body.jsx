import React, { useEffect } from "react";
import { lazy,Suspense } from "react";
import Login from "./Login";
import { createBrowserRouter, useNavigate } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import LoadingIcon from "./LoadingIcon";

const Browse = lazy(() => import("./Browse"))
  
const Body = () => {
  
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: (
        <Suspense fallback={<div><LoadingIcon/></div>}>
          <Browse />
        </Suspense>
     ),
    },
  ]);

  return (
    <div>
      
    <RouterProvider router={appRouter}></RouterProvider>
    </div>
  );
};

export default Body;
