import styled from 'styled-components/native';

export const Wrapper = styled.View`
  flex: 1;
  background-color: #fff;
`;

export const ListBox = styled.View`
  align-items: center;
  margin-bottom: 70px;
`;

export const ScrollViewStyled = styled.ScrollView`
  scrollbar-width: none; /* Oculta a barra de rolagem no Android */
  -ms-overflow-style: none; /* Oculta a barra de rolagem no IE/Edge */
`;
