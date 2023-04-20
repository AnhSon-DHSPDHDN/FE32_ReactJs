import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import { APP_ROUTER } from "./constants/router";
import HomeLayout from "./layouts/HomeLayout/HomeLayout";
import AboutPage from "./pages/AboutPage";
import AddProductPage from "./pages/AddProductPage";
import EditProductPage from "./pages/EditProductPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import ProductPage from "./pages/ProductsPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path={APP_ROUTER.HOME_PAGE} element={<HomeLayout />}>
            <Route index element={<HomePage />} />
            <Route path={APP_ROUTER.PRODUCTS_PAGE} element={<ProductPage />} />
            <Route path={APP_ROUTER.ABOUT_PAGE} element={<AboutPage />} />
            <Route path={APP_ROUTER.ADD_PRODUCT} element={<AddProductPage />} />
            <Route
              path={APP_ROUTER.EDIT_PRODUCT}
              element={<EditProductPage />}
            />
          </Route>
          <Route path={APP_ROUTER.LOGIN_PAGE} element={<LoginPage />} />
          <Route
            path="/"
            element={<Navigate to={APP_ROUTER.HOME_PAGE} replace />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
