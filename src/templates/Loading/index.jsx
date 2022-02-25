import P from 'prop-types';

import * as Styled from './styles';

export const Loading = ({ children }) => {
  return (
    <Styled.Container>
      <h1>{children}</h1>
    </Styled.Container>
  );
};

Loading.propTypes = {
  children: P.node.isRequired,
};
