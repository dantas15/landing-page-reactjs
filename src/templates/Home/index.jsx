import { useEffect, useState } from 'react';
import { mapData } from 'api/map-data';
import { Base } from 'templates/Base';
import { mockBase } from 'templates/Base/mock';
import { PageNotFound } from 'templates/PageNotFound';
import { Loading } from 'templates/Loading';

export const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const load = async () => {
      try {
        const data = await fetch(
          'http://localhost:1337/pages?slug=landing-page',
        );
        const json = await data.json();
        const pageData = mapData(json);

        setData(pageData[0]);
      } catch (err) {
        setData(undefined);
      }
    };

    load();
  });

  if (!data) {
    return <PageNotFound />;
  }

  if (data && !data.slug) {
    return <Loading />;
  }

  return <Base {...mockBase} />;
};
