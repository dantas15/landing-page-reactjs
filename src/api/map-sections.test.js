import {
  mapSectionContent,
  mapSections,
  mapSectionTwoColumns,
  mapTextGrid,
} from './map-sections';

describe('map-sections', () => {
  it('should render predefined section if there is no data', () => {
    const data = mapSections();
    expect(data).toEqual([{}]);
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
      _id: '619a43a4a3f34f11b910a893',
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
});
