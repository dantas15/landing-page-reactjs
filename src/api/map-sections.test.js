import {
  mapImageGrid,
  mapSectionContent,
  mapSections,
  mapSectionTwoColumns,
  mapTextGrid,
} from './map-sections';

import pagesFakeData from './dados.json';

describe('map-sections', () => {
  it('should render predefined section if there is no data', () => {
    const data = mapSections();
    expect(data).toEqual([{}]);
  });

  it('should render sections with correct data', () => {
    const data = mapSections(pagesFakeData[0].sections);
    expect(data[0].component).toBe('section.section-two-columns');
  });

  it('should test section if section-grid is neither text or image', () => {
    const sectionGridInvalidValues = mapSections([
      { __component: 'section.section-grid' },
    ]);
    expect(sectionGridInvalidValues).toEqual([
      { __component: 'section.section-grid' },
    ]);

    const noComponent = mapSections([{}]);
    expect(noComponent).toEqual([{}]);
  });

  it('should test section-grid without text_grid nor image_grid', () => {
    const sectionGridInvalidValues = mapSections([
      {
        __component: 'section.section-grid',
        image_grid: [{}],
      },
      {
        __component: 'section.section-grid',
        text_grid: [{}],
      },
    ]);

    expect(sectionGridInvalidValues.length).toBe(2);
  });

  it('should map section two columns even if there is no data', () => {
    const data = mapSectionTwoColumns();
    expect(data.background).toBe(false);
    expect(data.component).toBe('');
    expect(data.sectionId).toBe('');
    expect(data.srcImg).toBe('');
    expect(data.text).toBe('');
    expect(data.title).toBe('');
  });

  it('should map section two columns', () => {
    const data = mapSectionTwoColumns({
      __component: 'section.section-two-columns',
      title: 'title',
      description: 'abc',
      metadata: {
        background: true,
        section_id: 'home',
      },
      image: {
        url: 'a.svg',
      },
    });
    expect(data.background).toBe(true);
    expect(data.component).toBe('section.section-two-columns');
    expect(data.sectionId).toBe('home');
    expect(data.srcImg).toBe('a.svg');
    expect(data.text).toBe('abc');
    expect(data.title).toBe('title');
  });

  it('should map section content even if there is no data', () => {
    const data = mapSectionContent();

    expect(data.component).toBe('');
    expect(data.title).toBe('');
    expect(data.html).toBe('');
    expect(data.background).toBe(false);
    expect(data.sectionId).toBe('');
  });

  it('should map section content', () => {
    const data = mapSectionContent({
      __component: 'section.section-content',
      title: 'title 123',
      content: '<p>test html</p>',
      metadata: {
        background: false,
        name: 'Intro',
        section_id: 'intro',
      },
    });

    expect(data.component).toBe('section.section-content');
    expect(data.title).toBe('title 123');
    expect(data.html).toBe('<p>test html</p>');
    expect(data.background).toBe(false);
    expect(data.sectionId).toBe('intro');
  });

  it('should map grid text even if there is no data', () => {
    const data = mapTextGrid();

    expect(data.component).toBe('section.section-grid-text');
    expect(data.title).toBe('');
    expect(data.description).toBe('');
    expect(data.background).toBe(false);
    expect(data.sectionId).toBe('');
    expect(data.grid).toEqual([]);
  });

  it('should map grid text', () => {
    const data = mapTextGrid({
      title: 'MUSSUM IPSUM',
      description: 'O melhor lorem ipsum do mundis',
      text_grid: [
        {
          title: 'Mussum ipsum',
          description: 'Mussum Ipsum, cacilds vidis litro abertis.',
        },
      ],
      metadata: {
        background: true,
        section_id: 'grid-one',
      },
    });

    expect(data.component).toBe('section.section-grid-text');
    expect(data.title).toBe('MUSSUM IPSUM');
    expect(data.description).toBe('O melhor lorem ipsum do mundis');
    expect(data.background).toBe(true);
    expect(data.sectionId).toBe('grid-one');
    expect(data.grid[0].title).toBe('Mussum ipsum');
    expect(data.grid[0].description).toBe(
      'Mussum Ipsum, cacilds vidis litro abertis.',
    );
  });

  it('should map grid image even if there is no data', () => {
    const data = mapImageGrid();

    expect(data.component).toBe('section.section-grid-image');
    expect(data.title).toBe('');
    expect(data.description).toBe('');
    expect(data.background).toBe(false);
    expect(data.sectionId).toBe('');
    expect(data.grid).toEqual([]);
  });

  it('should map grid image', () => {
    const data = mapImageGrid({
      __component: 'section.section-grid-image',
      title: 'gallery',
      description: 'Aesthetic images',
      text_grid: [],
      image_grid: [
        {
          image: {
            alternativeText: 'Mussum',
            url: 'a.svg',
          },
        },
      ],
      metadata: {
        background: false,
        name: 'gallery',
        section_id: 'gallery',
      },
    });

    expect(data.component).toBe('section.section-grid-image');
    expect(data.title).toBe('gallery');
    expect(data.description).toBe('Aesthetic images');
    expect(data.background).toBe(false);
    expect(data.sectionId).toBe('gallery');
    expect(data.grid[0].altText).toBe('Mussum');
    expect(data.grid[0].srcImg).toBe('a.svg');
  });
});
