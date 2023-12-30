import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';

import { Root } from './Root';
import { SavedItemsProvider } from './store/SavedProductsContext';

ReactDOM.render(
  <SavedItemsProvider>
    <HashRouter>
      <Root />
    </HashRouter>
  </SavedItemsProvider>,
  document.getElementById('root'),
);
