import styled from 'styled-components';
export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1200;
`;
export const ModalImg = styled.div`
  max-width: ${p => `calc(100vw - ${p.theme.space[8]}px)`};
  max-height: ${p => `calc(100vh - ${p.theme.space[6]}px)`};
`;
