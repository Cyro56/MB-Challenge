import {styled} from 'styled-components/native';
import {ImageBackground} from 'react-native';

export const HeaderBackground = styled(ImageBackground)`
  height: 200px;
  width: 100%;
`;

export const IconWrapper = styled.View`
  justify-content: flex-end;
  flex-direction: row;
`;
export const IconBox = styled.View`
  margin-right: 10px;
  margin-top: 20px;
`;

export const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;

  color: #ffffff;
`;
