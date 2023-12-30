import { Routes, Route } from 'react-router-dom';

import { App } from './App';
import { HomePage } from './pages/HomePage/HomePage';
import { Menu } from './components/Menu';
import { CandlesPage } from './pages/CandlesPage';
import { ProductDetailsPage } from './pages/ProductDetailsPage';
import { AboutPage } from './pages/AboutPage';
import { FavouritesPage } from './pages/FavouritesPage';
import { CartPage } from './pages/CartPage';
import { NotFoundPage } from './pages/NotFoundPage';

export const Root = () => (
  <Routes>
    <Route path="/" element={<App />}>
      <Route index element={<HomePage />} />

      <Route path="candles">
        <Route index element={<CandlesPage />} />
        <Route path=":productId" element={<ProductDetailsPage />} />
      </Route>

      <Route path="about">
        <Route index element={<AboutPage />} />
      </Route>

      <Route path="favourites" element={<FavouritesPage />} />
      <Route path="cart" element={<CartPage />} />

      <Route path="/menu" element={<Menu />} />

      <Route path="*" element={<NotFoundPage />} />
    </Route>
  </Routes>
);
