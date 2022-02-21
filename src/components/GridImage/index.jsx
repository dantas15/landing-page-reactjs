import P from 'prop-types';

import * as Styled from './styles';

import { Heading } from 'components/Heading';
import { SectionBackground } from 'components/SectionBackground';
import { TextComponent } from 'components/TextComponent';

export const GridImage = ({ title, description, grid, background = false }) => {
  return (
    <SectionBackground background={background}>
      <Styled.Container>
        <Heading size="huge" uppercase colorDark={!background} as="h2">
          {title}
        </Heading>
        <TextComponent>{description}</TextComponent>
        <Styled.Grid>
          {grid.map((element, index) => {
            return (
              <Styled.GridElement key={index}>
                <Styled.Image src={element.srcImage} alt={element.altText} />
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
      srcImage: P.string.isRequired,
    }),
  ).isRequired,
};
