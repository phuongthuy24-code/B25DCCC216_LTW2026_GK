import { useState } from 'react';
import FilterBar from '../components/FilterBar';
import ProductTable from '../components/ProductTable';

const ProductList = ({ products, onChangeStock, onDelete }) => {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('Tất cả');

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