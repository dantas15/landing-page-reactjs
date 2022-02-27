import P from 'prop-types';

import * as Styled from './styles';

import { SectionBackground } from '../SectionBackground';
import { Heading } from 'components/Heading';
import { TextComponent } from 'components/TextComponent';

export const GridContent = ({ title, html, background, sectionId = '' }) => {
  return (
    <SectionBackground background={background} sectionId={sectionId}>
      <Styled.Container>
        <Heading uppercase colorDark={!background} as="h2">
          {title}
        </Heading>
        <Styled.Html>
          <TextComponent>{html}</TextComponent>
        </Styled.Html>
      </Styled.Container>
    </SectionBackground>
  );
};

GridContent.propTypes = {
  title: P.string.isRequired,
  html: P.string.isRequired,
  background: P.bool,
  sectionId: P.string,
};
