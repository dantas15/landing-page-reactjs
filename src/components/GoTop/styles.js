import styled, { css } from 'styled-components';

export const Container = styled.a`
  ${({ theme }) => css`
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 4rem;
    height: 4rem;

    bottom: 2rem;
    right: 2rem;

    z-index: 6;

    border-radius: 0.4rem;

    background: ${theme.colors.primaryColor};
    color: ${theme.colors.white};
  `}
`;
