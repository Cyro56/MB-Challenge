import React, {useContext} from 'react';
import {
  BannerContainer,
  Container,
  LoginBox,
  LoginTitle,
  StyledImage,
  TitleText,
  LoginButton,
  ButtonText,
  InputContainer,
  Input,
  ErrorMessageText,
  LoginButtonContainer,
  SignUpButton,
  SignUpText,
} from './Auth.styles';
import {Formik, ErrorMessage} from 'formik';
import {validationSchema} from './validationSchema';
import {AuthContext} from '../../context/AuthContext';
import {AuthUser} from './AuthUser';
import Toast from 'react-native-toast-message';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export function AuthScreen() {
  const AuthUsers = new AuthUser();
  const {setIsAuthenticated, setUserEmail} = useContext(AuthContext);
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const handleLogin = async (values: {email: string; password: string}) => {
    const validate = AuthUsers.validateUser(values.email, values.password);
    if (!validate) {
      Toast.show({
        type: 'error',
        position: 'top',
        visibilityTime: 3000,
        text1: 'Verifique suas credenciais',
      });
    } else {
      setUserEmail(values.email);
    }
    setIsAuthenticated(validate);
  };
  const handleSignUpNavigation = () => {
    navigation.navigate('SignUpScreen');
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
        <LoginTitle>Login</LoginTitle>
        <Formik
          initialValues={{email: '', password: ''}}
          validationSchema={validationSchema}
          onSubmit={handleLogin}>
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

              <LoginButtonContainer>
                <LoginButton onPress={() => handleSubmit()}>
                  <ButtonText>Entrar</ButtonText>
                </LoginButton>
                <SignUpButton onPress={handleSignUpNavigation}>
                  <SignUpText>Cadastre-se</SignUpText>
                </SignUpButton>
              </LoginButtonContainer>
            </>
          )}
        </Formik>
      </LoginBox>
    </Container>
  );
}
