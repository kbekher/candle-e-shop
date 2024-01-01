import { fetchProducts } from '../../api';
import { ProductsPage } from '../../components/ProductsPage';

export const CandlesPage = () => (
  <ProductsPage
    category="candles"
    fetchProducts={fetchProducts}
  />
);
