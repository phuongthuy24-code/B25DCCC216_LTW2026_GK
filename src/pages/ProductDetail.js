import { useParams, useNavigate } from 'react-router-dom';
import { formatMoney } from '../data';

const ProductDetail = ({ products }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return (
      <div>
        <p>Không tìm thấy sản phẩm</p>
        <button onClick={() => navigate(-1)}>Quay lại</button>
      </div>
    );
  }

  const { name, category, price, stock } = product;

  return (
    <div>
      <h1>Chi tiết</h1>
      <p>Tên sản phẩm: {name}</p>
      <p>Danh mục: {category}</p>
      <p>Giá: {formatMoney(price)}</p>
      <p>Tồn kho: {stock}</p>
      <button onClick={() => navigate(-1)}>Quay lại</button>
    </div>
  );
};

export default ProductDetail;