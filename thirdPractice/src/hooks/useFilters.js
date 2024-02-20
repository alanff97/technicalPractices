import { useContext } from 'react';
import { FiltersContext } from '../context/filters';

export function useFilters() {
  const { filters, setFilters } = useContext(FiltersContext);
  const filteredProducts = (products) => {
    return products.filter((product) => {
      product.price >= filters.minPrice &&
        (filters.category === 'all' || product.category === filters.category);
    });
  };

  return { filters, filteredProducts, setFilters };
}
