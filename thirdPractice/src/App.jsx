import { products as initialProducts } from './mocks/products.json';
import { useState } from 'react';
import { Products } from './components/Products';
import { Header } from './components/Header';
import { useFilters } from './hooks/useFilters';
import { CartProvider } from './context/cart';
import { Cart } from './components/Cart';

function App() {
  const [products] = useState(initialProducts);
  const { filterProducts } = useFilters();

  const filteredProducts = filterProducts(products);

  return (
    <CartProvider>
      <Header />
      <Cart />
      <Products products={filteredProducts} />
    </CartProvider>
  );
}

export default App;
