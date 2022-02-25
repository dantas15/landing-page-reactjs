import P from 'prop-types';
import { GridContent } from 'components/GridContent';

export const PageNotFound = () => {
  return (
    <GridContent
      title={'404'}
      html={`<p> The page you're searcing for was not found. <a href="/">Click here to go back</a></p>`}
    />
  );
};
