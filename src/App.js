import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import HeaderNav from "./components/HeaderNav";
import { APP_ROUTER } from "./constants/router";
import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductsPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <HeaderNav />
        <Routes>
          <Route path={APP_ROUTER.HOME_PAGE} element={<HomePage />} />
          <Route path={APP_ROUTER.PRODUCTS_PAGE} element={<ProductPage />} />
          <Route path={APP_ROUTER.ABOUT_PAGE} element={<AboutPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
