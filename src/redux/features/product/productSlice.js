import { createSlice } from "@reduxjs/toolkit";
import { KEY_PRODUCT_LIST } from "../../../constants/common";

const initialState = {
  productList: JSON.parse(localStorage.getItem(KEY_PRODUCT_LIST)) || [],
  productDetail: {},
};

const productSlice = createSlice({
  name: "product",
  initialState: initialState,
  reducers: {
    actAddProduct: (state, action) => {
      const _productList = [...state.productList, action.payload];
      state.productList = _productList;
      localStorage.setItem(KEY_PRODUCT_LIST, JSON.stringify(_productList));
    },
    actDeleteProductById: (state, action) => {
      const id = action.payload;
      const _productList = state.productList.filter(
        (product) => product.id !== id
      );
      state.productList = _productList;
      localStorage.setItem(KEY_PRODUCT_LIST, JSON.stringify(_productList));
    },
    actUpdateDetailProduct: (state, action) => {
      const id = action.payload;
      const product = state.productList.find((product) => product.id === id);
      if (product) {
        state.productDetail = product;
      }
    },
    actUpdateProduct: (state, action) => {
      const { id, product } = action.payload;
      const existedIndexProduct = state.productList.findIndex(
        (product) => product.id === id
      );
      const _productList = [...state.productList];

      if (existedIndexProduct !== -1) {
        _productList[existedIndexProduct] = {
          ..._productList[existedIndexProduct],
          ...product,
        };
        state.productList = _productList;
        localStorage.setItem(KEY_PRODUCT_LIST, JSON.stringify(_productList));
      }
    },
  },
});

export const {
  actAddProduct,
  actDeleteProductById,
  actUpdateDetailProduct,
  actUpdateProduct,
} = productSlice.actions;
export default productSlice.reducer;
