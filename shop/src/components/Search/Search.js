import React, { useState } from 'react';
import ProductList from '../ProductList/ProductList';
import productsForHim from '../Data/ProductData';


const SearchComponent = () => {
    const [searchQuery, setSearchQuery] = useState('');
  
    const handleSearchInputChange = (e) => {
      setSearchQuery(e.target.value);
    };
  
    const filteredProducts = productsForHim.filter((product) =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  
    return (
      <div className="your-search-container">
        <input
          type="text"
          placeholder="Search products..."
          value={searchQuery}
          onChange={handleSearchInputChange}
        />
        <ProductList products={filteredProducts} />
      </div>
    );
  };

export default SearchComponent;