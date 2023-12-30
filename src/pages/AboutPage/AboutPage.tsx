import { Breadcrumbs } from '../../components/Breadcrumbs';
import './AboutPage.scss';

export const AboutPage = () => (
  <div className="AboutPage">
    <div className="container container--with-min-height ">
      <div className="AboutPage__content">
        <div className="AboutPage__section">
          <Breadcrumbs />
        </div>

        <div className="AboutPage__section">
          <h1 className="AboutPage__title"> About LUM & it's author</h1>
        </div>
      </div>
    </div>
  </div>
);
