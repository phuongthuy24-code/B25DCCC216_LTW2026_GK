import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CATEGORIES } from '../data';

const AddProduct = ({ onAdd }) => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [category, setCategory] = useState(CATEGORIES[0]);
  const [price, setPrice] = useState('');
  const [stock, setStock] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() === '' || price === '' || stock === '') {
      setError('Vui lòng nhập đầy đủ thông tin');
      return;
    }
    const priceNum = Number(price);
    const stockNum = Number(stock);
    if (priceNum <= 0 || !Number.isInteger(stockNum) || stockNum < 0) {
      setError('Giá phải lớn hơn 0, số lượng là số nguyên không âm');
      return;
    }
    setError('');
    onAdd({
      name: name.trim(),
      category,
      price: priceNum,
      stock: stockNum,
    });
    navigate('/products', { replace: true });
  };

  return (
    <div>
      <h1>Thêm mới</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Tên sản phẩm</label>{' '}
          <input id="name" type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
          <label htmlFor="category">Danh mục</label>{' '}
          <select id="category" value={category} onChange={(e) => setCategory(e.target.value)}>
            {CATEGORIES.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="price">Giá</label>{' '}
          <input id="price" type="number" value={price} onChange={(e) => setPrice(e.target.value)} />
        </div>
        <div>
          <label htmlFor="stock">Số lượng tồn</label>{' '}
          <input id="stock" type="number" value={stock} onChange={(e) => setStock(e.target.value)} />
        </div>
        <button type="submit">Thêm</button>
        {error && <p>{error}</p>}
      </form>
    </div>
  );
};

export default AddProduct;