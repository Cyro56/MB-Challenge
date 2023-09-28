import React from 'react';
import {SignUpScreen} from './SignUpScreen';
import {render, fireEvent} from '@testing-library/react-native';
import {NavigationContainer} from '@react-navigation/native';

const mockedNavigation = {
  navigate: jest.fn(),
};

const mockUsersDBServiceCreateUser = jest.fn();

jest.mock('@react-navigation/native', () => {
  return {
    ...jest.requireActual('@react-navigation/native'),
    useNavigation: () => mockedNavigation,
  };
});

jest.mock('react-native-toast-message', () => ({
  show: jest.fn(),
}));

jest.mock('../../DataBases/UserDB.service', () => ({
  UsersDBService: {
    getInstance: () => ({
      createUser: mockUsersDBServiceCreateUser,
    }),
  },
}));

const renderWithNavigation = (component: React.ReactElement) => {
  return render(<NavigationContainer>{component}</NavigationContainer>);
};

describe('SignUpScreen', () => {
  it('should render SignUpScreen', () => {
    const {getByText, getByPlaceholderText} = renderWithNavigation(
      <SignUpScreen />,
    );

    const emailInput = getByPlaceholderText('Email');
    const passwordInput = getByPlaceholderText('Senha');
    const normalUserOption = getByText('Normal');
    const organizerUserOption = getByText('Organizador');
    const signUpButton = getByText('Cadastrar');
    const signInLink = getByText('Já tem uma conta? Faça login');

    expect(emailInput).toBeTruthy();
    expect(passwordInput).toBeTruthy();
    expect(normalUserOption).toBeTruthy();
    expect(organizerUserOption).toBeTruthy();
    expect(signUpButton).toBeTruthy();
    expect(signInLink).toBeTruthy();
  });

  it('should navigate to the Sign In screen when "Já tem uma conta? Faça login" is pressed', () => {
    const {getByText} = renderWithNavigation(<SignUpScreen />);
    const signInLink = getByText('Já tem uma conta? Faça login');
    fireEvent.press(signInLink);
    expect(mockedNavigation.navigate).toHaveBeenCalledWith('AuthScreen');
  });
});
