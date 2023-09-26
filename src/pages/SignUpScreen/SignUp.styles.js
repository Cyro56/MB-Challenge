import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #fff;
  align-items: center;
  padding: 20px;
`;

export const BannerContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 20px;
`;

export const StyledImage = styled.Image`
  width: 50px;
  height: 50px;
  margin-right: 10px;
`;

export const TitleText = styled.Text`
  color: #4876ee;
  font-size: 24px;
  font-weight: bold;
`;

export const LoginBox = styled.View`
  width: 100%;
  margin-top: 30px;
`;

export const LoginTitle = styled.Text`
  color: #000;
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
`;

export const InputContainer = styled.View`
  margin-bottom: 15px;
`;

export const Input = styled.TextInput`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
`;

export const ErrorMessageText = styled.Text`
  color: red;
  font-size: 14px;
  margin-top: 5px;
`;

export const SignUpButtonContainer = styled.View`
  margin-top: 20px;
  align-items: center;
`;

export const LoginButton = styled.TouchableOpacity`
  background-color: #4876ee;
  padding: 15px;
  border-radius: 5px;
  width: 48%;
`;

export const ButtonText = styled.Text`
  color: #fff;
  font-size: 18px;
  font-weight: bold;
  text-align: center;
`;

export const SignUpButton = styled.TouchableOpacity`
  margin-top: 20px;
`;

export const SignUpText = styled.Text`
  color: #4876ee;
  font-size: 16px;
  text-align: center;
`;

export const UserTypeSelector = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 15px;
`;

export const UserTypeOption = styled.TouchableOpacity`
  margin-left: 10px;
  padding: 8px 15px;
  border-radius: 5px;
  background-color: ${props => (props.selected ? '#4876ee' : '#f0f0f0')};
`;

export const UserTypeLabel = styled.Text`
  font-size: 16px;
  color: #000;
`;

export const UserTypeOptionText = styled.Text`
  color: ${props => (props.selected ? '#fff' : '#000')};
  font-size: 16px;
`;
