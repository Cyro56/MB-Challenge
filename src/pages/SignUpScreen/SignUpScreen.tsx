/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  BannerContainer,
  Container,
  LoginBox,
  LoginTitle,
  StyledImage,
  TitleText,
  InputContainer,
  Input,
  ErrorMessageText,
  LoginButton,
  ButtonText,
  SignUpButton,
  SignUpText,
  UserTypeSelector,
  UserTypeOption,
  UserTypeLabel,
  SignUpButtonContainer,
} from './SignUp.styles';
import {Formik, ErrorMessage} from 'formik';
import {validationSchema} from './validationSchema';
import Toast from 'react-native-toast-message';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';
import {UsersDBService} from '../../DataBases/UserDB.service';

export function SignUpScreen() {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const [selectedUserType, setSelectedUserType] = useState<string>('normal');
  const usersDBService = UsersDBService.getInstance();

  const handleSignUp = async (values: {
    email: string;
    password: string;
    userType: string;
  }) => {
    const {email, password, userType} = values;

    usersDBService.createUser(
      email,
      password,
      Boolean(userType === 'organizador'),
    );

    Toast.show({
      type: 'success',
      position: 'top',
      visibilityTime: 3000,
      text1: 'Usuário cadastrado.',
    });
    return;
  };

  const handleSignInNavigation = () => {
    navigation.navigate('AuthScreen');
  };

  return (
    <Container>
      <BannerContainer>
        <StyledImage
          source={require('../../components/assets/EventBanner.png')}
        />
        <TitleText>MB Events</TitleText>
      </BannerContainer>
      <LoginBox>
        <LoginTitle>Cadastro</LoginTitle>
        <Formik
          initialValues={{email: '', password: '', userType: 'normal'}}
          validationSchema={validationSchema}
          onSubmit={handleSignUp}>
          {({handleChange, handleBlur, handleSubmit, values}) => (
            <>
              <InputContainer>
                <Input
                  placeholder="Email"
                  value={values.email}
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                />
                <ErrorMessageText>
                  <ErrorMessage name="email" />
                </ErrorMessageText>
              </InputContainer>

              <InputContainer>
                <Input
                  placeholder="Senha"
                  secureTextEntry
                  value={values.password}
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                />
                <ErrorMessageText>
                  <ErrorMessage name="password" />
                </ErrorMessageText>
              </InputContainer>

              <UserTypeSelector>
                <UserTypeLabel>Tipo de Usuário:</UserTypeLabel>
                <UserTypeOption
                  onPress={() => {
                    handleChange('userType')('normal');
                    setSelectedUserType('normal'); // Defina a opção selecionada
                  }}
                  style={
                    selectedUserType === 'normal'
                      ? {backgroundColor: '#333', padding: 10, borderRadius: 5}
                      : {}
                  }>
                  <UserTypeLabel
                    style={
                      selectedUserType === 'normal'
                        ? {color: '#fff', fontSize: 18}
                        : {}
                    }>
                    Normal
                  </UserTypeLabel>
                </UserTypeOption>
                <UserTypeOption
                  onPress={() => {
                    handleChange('userType')('organizador');
                    setSelectedUserType('organizador'); // Defina a opção selecionada
                  }}
                  style={
                    selectedUserType === 'organizador'
                      ? {backgroundColor: '#333', padding: 10, borderRadius: 5}
                      : {}
                  }>
                  <UserTypeLabel
                    style={
                      selectedUserType === 'organizador'
                        ? {color: '#fff', fontSize: 18}
                        : {}
                    }>
                    Organizador
                  </UserTypeLabel>
                </UserTypeOption>
              </UserTypeSelector>

              <SignUpButtonContainer>
                <LoginButton onPress={() => handleSubmit()}>
                  <ButtonText>Cadastrar</ButtonText>
                </LoginButton>
                <SignUpButton onPress={handleSignInNavigation}>
                  <SignUpText>Já tem uma conta? Faça login</SignUpText>
                </SignUpButton>
              </SignUpButtonContainer>
            </>
          )}
        </Formik>
      </LoginBox>
    </Container>
  );
}
