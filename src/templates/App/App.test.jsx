import { screen } from '@testing-library/dom';

import { Home } from '.';
import { renderTheme } from '../../styles/render-theme';
import { theme } from '../../styles/theme';

test('renders home', () => {
  const { debug } = renderTheme(<Home />);
  debug();

  const headingContainer = screen.getByRole('heading', {
    name: 'Hello world',
  }).parentElement;
  expect(headingContainer).toHaveStyle({
    background: theme.colors.mainBg,
  });
  expect(headingContainer).toMatchSnapshot();
  expect(headingContainer).toHaveStyleRule('background', 'red');
});
