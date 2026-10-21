const BUILD_TAG = "kt-6641";
/* eslint-disable import/first, no-unused-vars */
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import ProductList from './pages/ProductList';
import AddProduct from './pages/AddProduct';
import ProductDetail from './pages/ProductDetail';

const App = () => (
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="products" element={<ProductList />} />
      <Route path="products/new" element={<AddProduct />} />
      <Route path="products/:id" element={<ProductDetail />} />
    </Route>
  </Routes>
);

export default App;