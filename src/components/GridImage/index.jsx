import P from 'prop-types';

import * as Styled from './styles';

import { Heading } from 'components/Heading';
import { SectionBackground } from 'components/SectionBackground';
import { TextComponent } from 'components/TextComponent';

export const GridImage = ({
  title,
  description,
  grid,
  background = false,
  sectionId = '',
}) => {
  return (
    <SectionBackground background={background} sectionId={sectionId}>
      <Styled.Container>
        <Heading size="huge" uppercase colorDark={!background} as="h2">
          {title}
        </Heading>
        <TextComponent>{description}</TextComponent>
        <Styled.Grid>
          {grid.map((element, index) => {
            return (
              <Styled.GridElement key={index}>
                <Styled.Image src={element.srcImg} alt={element.altText} />
              </Styled.GridElement>
            );
          })}
        </Styled.Grid>
      </Styled.Container>
    </SectionBackground>
  );
};

GridImage.propTypes = {
  background: P.bool,
  title: P.string.isRequired,
  description: P.string.isRequired,
  grid: P.arrayOf(
    P.shape({
      altText: P.string.isRequired,
      srcImg: P.string.isRequired,
    }),
  ).isRequired,
  sectionId: P.string,
};
