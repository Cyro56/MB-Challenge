import React from 'react';
import {Home} from './Home';
import {render} from '@testing-library/react-native';
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

describe('Home screen', () => {
  it('should render "Localização Atual" and "Eventos Recomendados"', () => {
    const {getByText} = renderWithNavigation(<Home />);
    const currentLocationText = getByText('Localização Atual');
    const recommendedEventsText = getByText('Eventos Recomendados');

    expect(currentLocationText).toBeTruthy();
    expect(recommendedEventsText).toBeTruthy();
  });
});
