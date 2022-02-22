import P from 'prop-types';

import * as Styled from './styles';

import { TextComponent } from 'components/TextComponent';
import { SectionContainer } from 'components/SectionContainer';

export const Footer = ({ html }) => {
  return (
    <Styled.Container>
      <SectionContainer>
        <TextComponent>{html}</TextComponent>
      </SectionContainer>
    </Styled.Container>
  );
};

Footer.propTypes = {
  html: P.string.isRequired,
};
