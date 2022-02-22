import { screen } from '@testing-library/dom';

import { Home } from '.';
import { renderTheme } from 'styles/render-theme';

describe('<Home />', () => {
  it('should render home', () => {
    const { debug } = renderTheme(<Home />);
    debug();
  });
});
