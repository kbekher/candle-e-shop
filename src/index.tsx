import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import { Root } from './Root';
import { SavedItemsProvider } from './store/SavedProductsContext';

ReactDOM.render(
  <SavedItemsProvider>
    <BrowserRouter>
      <Root />
    </BrowserRouter>
  </SavedItemsProvider>,
  document.getElementById('root'),
);
