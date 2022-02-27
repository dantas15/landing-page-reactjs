import P from 'prop-types';
import * as Styled from './styles';

import { Heading } from 'components/Heading';
import { SectionBackground } from 'components/SectionBackground';
import { TextComponent } from 'components/TextComponent';

export const GridTwoColumns = ({
  title,
  text,
  background,
  srcImg,
  sectionId = '',
}) => {
  return (
    <SectionBackground background={background}>
      <Styled.Container>
        <Styled.TextContainer>
          <Heading colorDark={!background} as="h2">
            {title}
          </Heading>
          <TextComponent>{text}</TextComponent>
        </Styled.TextContainer>
        <Styled.ImageContainer>
          <Styled.Image src={srcImg} alt={title} />
        </Styled.ImageContainer>
      </Styled.Container>
    </SectionBackground>
  );
};

GridTwoColumns.propTypes = {
  title: P.string.isRequired,
  text: P.string.isRequired,
  srcImg: P.string.isRequired,
  background: P.bool,
  sectionId: P.string,
};
