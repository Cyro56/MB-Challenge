import styled from 'styled-components/native';

export const CardContainer = styled.TouchableOpacity`
  width: 200px;
  height: 300px;
  background-color: #f2f2f2;
  margin: 10px;
  border-radius: 10px;

  justify-content: center;
  align-items: center;
`;

export const CardTitle = styled.Text`
  font-size: 16px;
  font-weight: bold;
  margin: 10px;
`;

export const CardImage = styled.Image`
  width: 80%;
  height: 60%; /* Altura da imagem */
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  background-color: red;
`;

export const CardInfo = styled.View`
  margin-top: 10px;
`;

export const CardDescription = styled.Text`
  font-size: 16px;
  margin-top: 5px;
  color: #333;
`;
