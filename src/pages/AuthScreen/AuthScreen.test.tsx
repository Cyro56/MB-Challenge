import React from 'react';
import {fireEvent, render} from '@testing-library/react-native';
import {AuthScreen} from './AuthScreen';
import {NavigationContainer} from '@react-navigation/native';

const mockedNavigate = jest.fn();

jest.mock('@react-navigation/native', () => {
  const actualNav = jest.requireActual('@react-navigation/native');
  return {
    ...actualNav,
    useNavigation: () => ({
      navigate: mockedNavigate,
    }),
  };
});

const renderWithNavigation = (component: React.ReactElement) => {
  return render(<NavigationContainer>{component}</NavigationContainer>);
};

describe('AuthScreen component', () => {
  it('should render AuthScreen with login form', () => {
    const {getByText, getByPlaceholderText} = renderWithNavigation(
      <AuthScreen />,
    );
    const title = getByText('MB Events');
    const emailInput = getByPlaceholderText('Email');
    const passwordInput = getByPlaceholderText('Senha');
    const loginButton = getByText('Entrar');
    const signUpButton = getByText('Cadastre-se');

    expect(loginButton).toBeTruthy();
    expect(signUpButton).toBeTruthy();
    expect(emailInput).toBeTruthy();
    expect(passwordInput).toBeTruthy();
    expect(title).toBeTruthy();
  });
  it('should navigate to SignUpScreen when "Cadastre-se" button is pressed', () => {
    const {getByText} = renderWithNavigation(<AuthScreen />);
    const signUpButton = getByText('Cadastre-se');
    fireEvent.press(signUpButton);
    expect(mockedNavigate).toHaveBeenCalledWith('SignUpScreen');
  });
});
