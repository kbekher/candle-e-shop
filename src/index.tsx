import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';

import { Root } from './Root';
import { SavedItemsProvider } from './store/SavedProductsContext';


ReactDOM.createRoot(document.getElementById('root')!).render(
  <SavedItemsProvider>
    <HashRouter>
      <Root />
    </HashRouter>
  </SavedItemsProvider>
);
