import ProductRow from './ProductRow';

const ProductTable = ({ products, onChangeStock, onDelete }) => (
  <table>
    <thead>
      <tr>
        <th>Tên sản phẩm</th>
        <th>Danh mục</th>
        <th>Giá</th>
        <th>Tồn kho</th>
        <th>Thao tác</th>
      </tr>
    </thead>
    <tbody>
      {products.map((p) => (
        <ProductRow
          key={p.id}
          product={p}
          onChangeStock={onChangeStock}
          onDelete={onDelete}
        />
      ))}
    </tbody>
  </table>
);

export default ProductTable;