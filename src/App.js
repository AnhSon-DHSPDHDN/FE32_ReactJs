import React from "react";
import "antd/dist/reset.css";
import ProductCard from "./components/ProductCard";
import Component1 from "./components/TransferProp/Component1";

const dataProducts = [
  {
    id: 1,
    img: "https://kenh14cdn.com/203336854389633024/2020/12/31/photo-1-16094117624341764656274.jpg",
    price: 120000,
    productName: "Son Tung MTP",
  },
  {
    id: 2,
    img: "https://images2.thanhnien.vn/zoom/700_438/Uploaded/haoph/2022_08_15/mono-4-8195.jpg",
    price: 150000,
    productName: "Mono MTP",
  },
  {
    id: 3,
    img: "https://mayruaxemay.vn/wp-content/uploads/2021/03/tran-duc-bo-la-ai-1.jpg",
    price: 550000,
    productName: "Duc bo",
  },
];

function App() {
  const renderProducts = (products) => {
    return products.map((product) => {
      return <ProductCard key={product.id} product={product} />;
    });
  };

  return (
    <div style={{ display: "flex", gap: 20 }}>
      {renderProducts(dataProducts)}
    </div>
  ); //jsx
}

export default App;
