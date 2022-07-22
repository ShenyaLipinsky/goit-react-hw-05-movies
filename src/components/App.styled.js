import styled from 'styled-components';
export const AppBox = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: ${p => `${p.theme.space[5]}px`};

  padding-bottom: 24px;
`;
