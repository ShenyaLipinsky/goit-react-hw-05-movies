import styled from 'styled-components';
export const ImageGalleryBox = styled.ul`
  display: grid;
  max-width: ${p => `calc(100vw - ${p.theme.space[8]}px)`};
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  grid-gap: ${p => `${p.theme.space[5]}px`};
  margin: ${p => p.theme.space[0]} auto;
  padding: ${p => p.theme.space[0]};
  list-style: none;
`;
