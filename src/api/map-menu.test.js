import { mapMenu, mapMenuLinks } from './map-menu';

describe('map-menu', () => {
  it('should return a predefined object if there is no data', () => {
    const menu = mapMenu();
    expect(menu.newTab).toBe(false);
    expect(menu.text).toBe('');
    expect(menu.srcImg).toBe('');
    expect(menu.link).toBe('');
  });

  it('should map menu to match keys and required values', () => {
    const menu = mapMenu({
      open_in_new_tab: false,
      logo_text: 'LOGO',
      logo_link: '#home',
      logo: {
        url: 'a.svg',
      },
      menu: [
        {
          open_in_new_tab: false,
          link_text: 'Intro',
          url: '#intro',
        },
        {
          open_in_new_tab: false,
          link_text: 'grid-one',
          url: '#grid-one',
        },
      ],
    });
    expect(menu.newTab).toBe(false);
    expect(menu.text).toBe('LOGO');
    expect(menu.srcImg).toBe('a.svg');
    expect(menu.link).toBe('#home');
    expect(menu.links[0].newTab).toBe(false);
    expect(menu.links[0].children).toBe('Intro');
    expect(menu.links[0].link).toBe('#intro');
  });

  it('should return an empty array if there is no lins', () => {
    const links = mapMenuLinks();
    expect(links).toEqual([]);
  });

  it('should map links', () => {
    const links = mapMenuLinks([
      {
        open_in_new_tab: false,
        link_text: 'Intro',
        url: '#intro',
      },
      {},
    ]);

    expect(links[0].newTab).toBe(false);
    expect(links[0].children).toBe('Intro');
    expect(links[0].link).toBe('#intro');
  });
});
