// SearchBox.jsx

import React from 'react';
import styles from './SearchBox.module.css';

function SearchBox({ value, onChange }) {
  return (
    <input
      className={styles.searchBox} // Додаємо клас з CSS-модуля
      type="text"
      value={value}
      onChange={e => onChange(e.target.value)}
      placeholder="Search..."
    />
  );
}

export default SearchBox;
