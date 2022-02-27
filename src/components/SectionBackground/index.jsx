import P from 'prop-types';

import * as Styled from './styles';

import { SectionContainer } from 'components/SectionContainer';

export const SectionBackground = ({
  children,
  background = false,
  sectionId = '',
}) => {
  return (
    <Styled.Container background={background} id={sectionId}>
      <SectionContainer>{children}</SectionContainer>
    </Styled.Container>
  );
};

SectionBackground.propTypes = {
  children: P.node.isRequired,
  background: P.bool,
  sectionId: P.string,
};
