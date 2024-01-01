import React from 'react';
import { createRoot }from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { Root } from './Root';
import { SavedItemsProvider } from './store/SavedProductsContext';

const rootElement = document.getElementById('root') as HTMLElement;

createRoot(rootElement).render(
  <SavedItemsProvider>
    <BrowserRouter>
      <Root />
    </BrowserRouter>
  </SavedItemsProvider>
);