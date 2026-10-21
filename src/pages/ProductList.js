import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import FilterBar from '../components/FilterBar';
import ProductTable from '../components/ProductTable';

const ProductList = ({ products, onChangeStock, onDelete }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('Tất cả');
  const [message, setMessage] = useState(location.state?.message || '');

  // Xóa state khỏi history để F5 không hiện lại thông báo
  useEffect(() => {
    if (location.state?.message) {
      navigate(location.pathname, { replace: true, state: null });
    }
  }, []);

  // Tự ẩn sau 3 giây, cleanup khi rời trang
  useEffect(() => {
    if (!message) return;
    const timer = setTimeout(() => setMessage(''), 3000);
    return () => clearTimeout(timer);
  }, [message]);

  const handleQueryShift = (e) => setQuery(e.target.value);
  const handleCategoryChange = (e) => setCategory(e.target.value);

  const filtered = products.filter(
    (p) =>
      p.name.toLowerCase().includes(query.trim().toLowerCase()) &&
      (category === 'Tất cả' || p.category === category)
  );

  return (
    <div>
      <h1>Danh sách</h1>
      {message && (
        <div className="notice">
          <span>{message}</span>{' '}
          <button onClick={() => setMessage('')}>×</button>
        </div>
      )}
      <FilterBar
        query={query}
        category={category}
        onQueryChange={handleQueryShift}
        onCategoryChange={handleCategoryChange}
      />
      <p>Tìm thấy {filtered.length} sản phẩm</p>
      {filtered.length === 0 ? (
        <p>Không có dữ liệu</p>
      ) : (
        <ProductTable
          products={filtered}
          onChangeStock={onChangeStock}
          onDelete={onDelete}
        />
      )}
    </div>
  );
};

export default ProductList;