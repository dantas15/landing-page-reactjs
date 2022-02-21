import { screen } from '@testing-library/dom';
import { ThemeProvider } from 'styled-components';

import { renderTheme } from 'styles/render-theme';
import { theme } from 'styles/theme';

import { Heading } from '.';

describe('<Heading />', () => {
  it('should render with default values', () => {
    renderTheme(<Heading>oi</Heading>);

    const heading = screen.getByRole('heading', { name: 'oi' });

    expect(heading).toHaveStyle({
      color: theme.colors.primaryColor,
      'font-size': theme.font.sizes.xhuge,
      'text-transform': 'none',
    });
  });

  it('should render with white color', () => {
    renderTheme(<Heading colorDark={false}>oi</Heading>);

    const heading = screen.getByRole('heading', { name: 'oi' });

    expect(heading).toHaveStyle({
      color: theme.colors.white,
    });
  });

  it('should render correct heading sizes', () => {
    const { rerender } = renderTheme(<Heading size="small">oi</Heading>);

    const heading = screen.getByRole('heading', { name: 'oi' });

    expect(heading).toHaveStyle({
      'font-size': theme.font.sizes.medium,
    });

    // Medium -> large size
    rerender(
      <ThemeProvider theme={theme}>
        <Heading size="medium">oi</Heading>
      </ThemeProvider>,
    );

    expect(screen.getByRole('heading', { name: 'oi' })).toHaveStyle({
      'font-size': theme.font.sizes.large,
    });

    // Big -> xlarge size
    rerender(
      <ThemeProvider theme={theme}>
        <Heading size="big">oi</Heading>
      </ThemeProvider>,
    );

    expect(screen.getByRole('heading', { name: 'oi' })).toHaveStyle({
      'font-size': theme.font.sizes.xlarge,
    });

    // Huge -> xhuge size
    rerender(
      <ThemeProvider theme={theme}>
        <Heading size="huge">oi</Heading>
      </ThemeProvider>,
    );

    expect(screen.getByRole('heading', { name: 'oi' })).toHaveStyle({
      'font-size': theme.font.sizes.xhuge,
    });
  });

  it('shuold render correct font-size when screen is less than 768px', () => {
    const { rerender } = renderTheme(<Heading size="huge">oi</Heading>);
    const heading = screen.getByRole('heading', { name: 'oi' });

    expect(heading).toHaveStyleRule('font-size', theme.font.sizes.xlarge, {
      media: theme.media.lteMedium,
    });
  });

  it('should render with uppercase letters', () => {
    renderTheme(<Heading uppercase={true}>oi</Heading>);

    const heading = screen.getByRole('heading', { name: 'oi' });

    expect(heading).toHaveStyle({
      'text-transform': 'uppercase',
    });
  });

  it('should render correct heading element', () => {
    const { container } = renderTheme(<Heading as="h6">oi</Heading>);
    const heading = screen.getByRole('heading', { name: 'oi' });
    const h6 = container.querySelector('h6');

    expect(h6.tagName.toLowerCase()).toBe('h6');
  });
});
