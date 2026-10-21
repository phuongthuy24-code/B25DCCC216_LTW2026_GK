const BUILD_TAG = "kt-6641";
/* eslint-disable import/first, no-unused-vars */
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import ProductList from './pages/ProductList';
import AddProduct from './pages/AddProduct';
import ProductDetail from './pages/ProductDetail';
import './App.css';

const App = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    axios
      .get('/data/products.json', { signal: controller.signal })
      .then((res) => {
        setProducts(res.data);
        setLoading(false);
      })
      .catch((err) => {
        if (axios.isCancel(err)) return;
        setError('Không tải được dữ liệu');
        setLoading(false);
      });
    return () => controller.abort();
  }, []);

  const changeStock = (id, delta) => {
    setProducts(
      products.map((p) => (p.id === id ? { ...p, stock: p.stock + delta } : p))
    );
  };

  const deleteProduct = (id) => {
    setProducts(products.filter((p) => p.id !== id));
  };

  const addProduct = (product) => {
    const newId = products.reduce((max, p) => Math.max(max, p.id), 0) + 1;
    setProducts([...products, { ...product, id: newId }]);
  };

  return (
    <Routes>
      <Route path="/" element={<Layout loading={loading} error={error} />}>
        <Route index element={<Home />} />
        <Route
          path="products"
          element={
            <ProductList
              products={products}
              onChangeStock={changeStock}
              onDelete={deleteProduct}
            />
          }
        />
        <Route path="products/new" element={<AddProduct onAdd={addProduct} />} />
        <Route path="products/:id" element={<ProductDetail products={products} />} />
      </Route>
    </Routes>
  );
};

export default App;