const { mapData } = require('./map-data');

describe('map-data', () => {
  it('should map data even if there is no data', () => {
    const pagesData = mapData()[0];
    expect(pagesData.footerHtml).toBe('');
    expect(pagesData.slug).toBe('');
    expect(pagesData.title).toBe('');
  });

  it('should map data if there is data', () => {
    const sectionsArray = [0, 1, 2];
    const menuObject = { test: 'menu' };

    const pagesData = mapData([
      {
        footer_text: '<p>Hey</p>',
        slug: 'test_slug',
        title: 'test_title',
      },
    ])[0];

    expect(pagesData.footerHtml).toBe('<p>Hey</p>');
    expect(pagesData.slug).toBe('test_slug');
    expect(pagesData.title).toBe('test_title');
  });
});
