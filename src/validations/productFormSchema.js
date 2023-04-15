import * as Yup from "yup";

export const productFormSchema = Yup.object({
  productId: Yup.string().required("Please input product id"),
  productName: Yup.string().required("Please input product name"),
  productType: Yup.string().required("Please input product type"),
  productQuantity: Yup.string().required("Please input product quantity"),
  inputPrice: Yup.string().required("Please input product input price"),
  salePrice: Yup.string().required("Please input product sale price"),
});
