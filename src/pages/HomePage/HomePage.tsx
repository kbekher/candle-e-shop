import { ProductsSlider } from '../../components/ProductsSlider';

import './HomePage.scss';

export const HomePage = () => (
  <div className="HomePage">
    <div className="container">
      <div className="HomePage__content">
        <div className="HomePage__section">
          Intro
        </div>
        <div className="HomePage__section">
          <ProductsSlider
            title="Best selling products"
            filter="random"
            sortBy="age"
          />
        </div>
        <div className="HomePage__section">
         about
        </div>
      </div>
    </div>
  </div>
);
