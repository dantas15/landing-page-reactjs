import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    text-align: center;
    margin: 0 auto;
  `}
`;

export const Html = styled.div`
  ${({ theme }) => css`
    margin: ${theme.spacings.xhuge} 0;
  `}
`;
