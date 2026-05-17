import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import ProductsPage from "./pages/ProductsPage";
import AddProduct from "./pages/AddProduct";

import useProducts from "./hooks/useProducts";

function App() {
  const {
    products = [],
    addProduct = () => {},
    updateProduct = () => {},
    deleteProduct = () => {},
  } = useProducts() || {};

  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/products"
          element={
            <ProductsPage
              products={products}
              updateProduct={updateProduct}
              deleteProduct={deleteProduct}
            />
          }
        />

        <Route
          path="/add-product"
          element={<AddProduct addProduct={addProduct} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;