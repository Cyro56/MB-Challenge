import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #fff;
  align-items: center;
`;

export const BannerContainer = styled.View`
  margin-top: 60px;
  flex-direction: row;
  align-items: center;
`;

export const StyledImage = styled.Image`
  width: 50px;
  height: 50px;
`;

export const TitleText = styled.Text`
  color: #4876ee;
  font-size: 24px;
  font-weight: bold;
  margin: 10px;
`;

export const LoginBox = styled.View`
  width: 100%;
  margin-top: 50px;
`;
export const LoginTitle = styled.Text`
  color: #000;
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 20px;
  margin-left: 30px;
`;

export const LoginButtonContainer = styled.View`
  width: 100%;
  justify-content: center;
  align-items: center;
`;
export const LoginButton = styled.TouchableOpacity`
  background-color: #4876ee;
  padding: 10px 20px;
  border-radius: 5px;
  margin-top: 20px;
  width: 200px;
`;

export const ButtonText = styled.Text`
  color: #fff;
  font-size: 18px;
  font-weight: bold;
  text-align: center;
`;

export const SignUpButton = styled.TouchableOpacity`
  margin-top: 10px;
  color: #007bff;
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  text-decoration: underline;
`;

export const SignUpText = styled.Text`
  color: #007bff;
  font-size: 18px;
  font-weight: bold;
  text-align: center;
`;
export const InputContainer = styled.View`
  margin-bottom: 20px;
  margin-left: 30px;
`;

export const Input = styled.TextInput`
  background-color: white;
  height: 55px;
  width: 300px;
  border-radius: 8px;
  border-width: 1px;
  border-color: #ccc;
  padding: 8px;
`;

export const ErrorMessageText = styled.Text`
  color: #ff0000;
  font-size: 14px;
  margin-top: 5px;
`;
