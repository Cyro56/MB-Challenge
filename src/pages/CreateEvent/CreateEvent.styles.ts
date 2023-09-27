import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #fff;
  padding: 20px;
`;

export const Title = styled.Text`
  font-size: 24px;
  margin-bottom: 20px;
  font-weight: bold;
`;

export const FormGroup = styled.View`
  margin-bottom: 20px;
`;

export const Label = styled.Text`
  font-weight: bold;
  margin-bottom: 5px;
`;

export const Input = styled.TextInput`
  border-width: 1px;
  border-color: #ccc;
  border-radius: 5px;
  padding: 10px;
  font-size: 16px;
`;

export const ErrorText = styled.Text`
  color: red;
  font-size: 14px;
`;

export const SubmitButton = styled.TouchableOpacity`
  background-color: #007bff;
  padding: 10px;
  border-radius: 5px;
  align-items: center;
  margin-bottom: 100px;
`;

export const SubmitButtonText = styled.Text`
  color: #fff;
  font-size: 16px;
`;
