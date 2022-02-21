import styled, { css } from 'styled-components';

export const Container = styled.footer`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};
  `}
`;
