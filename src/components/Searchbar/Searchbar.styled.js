import styled from 'styled-components';
export const SearchBarBox = styled.header`
  top: 0;
  left: 0;
  position: sticky;
  z-index: 1100;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: ${p => `${p.theme.space[8]}px`};
  padding: ${p => `${p.theme.space[4]}px`} ${p => `${p.theme.space[6]}px`};
  color: ${p => p.theme.colors.white};
  background-color: ${p => p.theme.colors.accent};
  box-shadow: ${p => p.theme.shadows.searchBoxShadow};
`;

export const SearchBarForm = styled.form`
  display: flex;
  align-items: baseline;
  width: 100%;
  max-width: 600px;
  background-color: ${p => p.theme.colors.white};
  border-radius: ${p => p.theme.radii.normal};
  overflow: hidden;
`;
export const SearchBarButton = styled.button`
  display: inline-block;
  width: 48px;
  height: 48px;
  border: 0;

  /* background-image: url('https://cdn-icons.flaticon.com/png/512/5254/premium/5254172.png?token=exp=1657284283~hmac=0f4a90767eb5e41b4f8da3f7a4710224'); */
  background-size: 40%;
  background-repeat: no-repeat;
  background-position: center;
  background-color: ${p => p.theme.colors.white};
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;
  :hover {
    opacity: 1;
  }
`;
// export const SearchBarButtonLabel = styled.span`
//   position: absolute;
//   width: 1px;
//   height: 1px;
//   padding: 0;
//   overflow: hidden;
//   clip: rect(0, 0, 0, 0);
//   white-space: nowrap;
//   clip-path: inset(50%);
//   border: 0;
// `;

export const SearchBarInput = styled.input`
  display: inline-block;
  width: 100%;
  font: inherit;
  font-size: ${p => p.theme.fontSizes.m};
  border: none;
  outline: none;
  padding: ${p => `${p.theme.space[2]}px`};
  line-height: ${p => p.theme.lineHeights.body};
  ::placeholder {
    font: inherit;
    font-size: ${p => p.theme.fontSizes.s};
  }
`;
