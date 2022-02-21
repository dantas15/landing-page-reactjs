import { screen } from '@testing-library/react';

import { renderTheme } from 'styles/render-theme';

import { MenuLink } from '.';

describe('<MenuLink />', () => {
  it('should render a link', () => {
    const { container } = renderTheme(
      <MenuLink link={'http://localhost'}>Children</MenuLink>,
    );
    expect(container.firstChild).toHaveAttribute('target', '_self');
  });

  it('should open a link in a new tab', () => {
    const { container } = renderTheme(
      <MenuLink link={'http://localhost'} newTab={true}>
        Children
      </MenuLink>,
    );
    expect(container.firstChild).toHaveAttribute('target', '_blank');
  });

  it('should match snapshot', () => {
    const { container } = renderTheme(
      <MenuLink link={'http://localhost'} newTab={true}>
        Children
      </MenuLink>,
    );
    expect(container.firstChild).toMatchInlineSnapshot(`
      .c0 {
        display: block;
        -webkit-text-decoration: none;
        text-decoration: none;
        font-size: 1.6rem;
        padding: 1.6rem;
        color: #0A1128;
        position: relative;
      }

      .c0::after {
        content: '';
        position: absolute;
        bottom: 0.76rem;
        left: 50%;
        width: 0;
        height: 0.2rem;
        background: #DC143C;
        -webkit-transition: all 300ms ease-in-out;
        transition: all 300ms ease-in-out;
      }

      .c0:hover::after {
        left: 25%;
        width: 50%;
      }

      <a
        class="c0"
        href="http://localhost"
        target="_blank"
      >
        Children
      </a>
    `);
  });
});
