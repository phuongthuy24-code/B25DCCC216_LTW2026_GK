import { CATEGORIES } from '../data';

const FilterBar = ({ query, category, onQueryChange, onCategoryChange }) => (
  <div>
    <label htmlFor="search">Tìm kiếm</label>{' '}
    <input id="search" type="text" value={query} onChange={onQueryChange} />{' '}
    <label htmlFor="filter">Danh mục</label>{' '}
    <select id="filter" value={category} onChange={onCategoryChange}>
      <option value="Tất cả">Tất cả</option>
      {CATEGORIES.map((c) => (
        <option key={c} value={c}>{c}</option>
      ))}
    </select>
  </div>
);

export default FilterBar;