import { screen } from '@testing-library/react';

import { renderTheme } from 'styles/render-theme';

import { LogoLink } from '.';

describe('<LogoLink />', () => {
  const text = 'Hello World!';

  it('should render text logo', () => {
    renderTheme(<LogoLink link="#target" text={text} />);

    const heading = screen.getByRole('heading', { name: text });
    expect(heading).toBeInTheDocument();

    const link = screen.getByRole('link', { name: text });
    expect(link).toHaveAttribute('href', '#target');
  });

  it('should render image logo', () => {
    renderTheme(<LogoLink link="#target" text={text} srcImg={'image.jpg'} />);
    const img = screen.getByAltText(text);
    expect(img).toHaveAttribute('src', 'image.jpg');
  });

  it('should match snapshot', () => {
    const { container } = renderTheme(
      <LogoLink link="#target" text={text} srcImg={'image.jpg'} />,
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
