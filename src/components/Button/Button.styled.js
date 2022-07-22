import styled from 'styled-components';
export const LoadMoreBtn = styled.button`
  margin: 0 auto;
  padding: ${p => `${p.theme.space[3]}px`} ${p => `${p.theme.space[5]}px`};
  border-radius: ${p => p.theme.radii.normal};
  background-color: ${p => p.theme.colors.accent};
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  text-align: center;
  display: inline-block;
  color: ${p => p.theme.colors.white};
  border: ${p => p.theme.borders.none};
  text-decoration: none;
  cursor: pointer;
  font-family: inherit;
  font-size: ${p => p.theme.fontSizes.s};
  line-height: ${p => p.theme.lineHeights.body};
  font-style: normal;
  font-weight: 500;
  width: 180px;
  box-shadow: ${p => p.theme.shadows.buttonBoxShadow};
  :focus,
  :hover {
    background-color: ${p => p.theme.colors.hovered};
  }
`;
