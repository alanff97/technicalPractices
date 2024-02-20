import { products as initialProducts } from './mocks/products.json';
import { useState } from 'react';
import { Products } from './components/Products';
import { Header } from './components/Header';

function App() {
  const [products] = useState(initialProducts);
  const { filters, filterProducts, setFilters } = useFilters();

  const filteredProducts = filterProducts(products);

  return (
    <>
      <Header />
      <Products products={filteredProducts} />
    </>
  );
}

export default App;
