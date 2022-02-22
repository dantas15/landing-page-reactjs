import P from 'prop-types';

import * as Styled from './styles';

import { TextComponent } from 'components/TextComponent';
import { SectionContainer } from 'components/SectionContainer';

export const Footer = ({ footerHtml }) => {
  return (
    <Styled.Container>
      <SectionContainer>
        <TextComponent>{footerHtml}</TextComponent>
      </SectionContainer>
    </Styled.Container>
  );
};

Footer.propTypes = {
  footerHtml: P.string.isRequired,
};
