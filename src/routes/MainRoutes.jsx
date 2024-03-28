import React from "react";
import Home from "../pages/home/Home";
import { Route, Routes } from "react-router-dom";

const MainRoutes = () => {
  const PUBLICK_ROUTES = [
    {
      link: "/",
      element: <Home />,
    },
  ];
  return (
    <Routes>
      {PUBLICK_ROUTES.map((item, index) => (
        <Route element={item.element} path={item.link} key={index} />
      ))}
    </Routes>
  );
};

export default MainRoutes;
