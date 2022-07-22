import styled from 'styled-components';
export const ImageGalleryItemStyled = styled.li`
  border-radius: 2px;
  box-shadow: ${p => p.theme.shadows.cardBoxShadow};
`;
export const ImageGalleryImgStyled = styled.img`
  width: 100%;
  height: ${p => `${p.theme.space[11]}px`};
  object-fit: cover;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  :hover {
    transform: scale(1.03);
    cursor: zoom-in;
  }
`;
