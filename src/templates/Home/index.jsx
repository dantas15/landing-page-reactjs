import { useEffect, useState } from 'react';
import { mapData } from 'api/map-data';
import { Base } from 'templates/Base';
import { mockBase } from 'templates/Base/mock';
import { PageNotFound } from 'templates/PageNotFound';
import { Loading } from 'templates/Loading';
import { GridTwoColumns } from 'components/GridTwoColumns';
import { GridContent } from 'components/GridContent';
import { GridText } from 'components/GridText';
import { GridImage } from 'components/GridImage';
import { useLocation } from 'react-router-dom';

export const Home = () => {
  const [data, setData] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const pathname = location.pathname.replace(/[^a-z0-9-_]/gi, '');
    const slug = pathname ? pathname : 'landing-page';

    const load = async () => {
      try {
        const data = await fetch(`http://localhost:1337/pages?slug=${slug}`);
        const json = await data.json();
        const pageData = mapData(json);
        setData(pageData[0]);
      } catch (err) {
        setData(undefined);
      }
    };

    load();
  }, [location.pathname]);

  if (!data) {
    return <PageNotFound />;
  }

  if (data && !data.slug) {
    return <Loading />;
  }

  const { menu, sections, footerHtml, slug } = data;
  const { links, text, link, srcImg } = menu;

  return (
    <Base
      footerHtml={footerHtml}
      links={links}
      logoData={{ text, link, srcImg }}
    >
      {sections.map((section, index) => {
        const { component } = section;
        const key = `${slug}-${index}`;

        if (component === 'section.section-two-columns') {
          return <GridTwoColumns {...section} key={key} />;
        }

        if (component === 'section.section-content') {
          return <GridContent {...section} key={key} />;
        }

        if (component === 'section.section-grid-text') {
          return <GridText {...section} key={key} />;
        }

        if (component === 'section.section-grid-image') {
          return <GridImage {...section} key={key} />;
        }
      })}
    </Base>
  );
};
