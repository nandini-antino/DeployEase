import React from "react";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import CreateProject from "./Pages/CreateProject";
import About from "./Pages/About";
import Analytics from "./Pages/Analytics";
import { Pathname } from "./Pathname";
import ProductList from "./Pages/ProductList";
import SideBar from "./Components/SideBar";
import Comment from "./Pages/Comment";
import Product from "./Pages/Product";
import Login from "./Views/beforeAuth/Login/Login";
import Landing from "./Views/beforeAuth/Landing/Landing";
import DashBoard from "./Pages/DashBoard";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={Pathname.LOGIN} element={<Login />} />
        <Route path={Pathname.LANDING_PAGE} element={<Landing />} />
        <Route path="/*" element={<MainApp />} />
      </Routes>
    </BrowserRouter>
  );
};

const MainApp = () => {
  return (
    <SideBar>
      <Routes>
        <Route path={Pathname.DASHBOARD} element={<DashBoard />} />
        <Route
          path={Pathname.CreateProject}
          index
          element={<CreateProject />}
        />
        <Route path={Pathname.ABOUT} element={<About />} />
        <Route path={Pathname.COMMENT} element={<Comment />} />
        <Route path={Pathname.ANALYTICS} element={<Analytics />} />
        <Route path={Pathname.PRODUCT} element={<Product />} />
        <Route path={Pathname.PRODUCT_LIST} element={<ProductList />} />
      </Routes>
    </SideBar>
  );
};

export default App;
