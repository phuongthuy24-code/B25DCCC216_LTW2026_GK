import ProductTable from '../components/ProductTable';

const ProductList = ({ products, onChangeStock, onDelete }) => (
  <div>
    <h1>Danh sách</h1>
    <ProductTable
      products={products}
      onChangeStock={onChangeStock}
      onDelete={onDelete}
    />
  </div>
);

export default ProductList;