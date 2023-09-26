import React, {useContext, useState} from 'react';
import {GeolocationService} from '../Services/Getlocation.service';
import {useLocation} from '../hooks/useLocation';
import {SvgUri} from 'react-native-svg';
import {
  HeaderContainer,
  HeaderText,
  HeaderTitleContainer,
  HeaderTitleText,
  SearchContainer,
  SearchInput,
} from './Header.styles';
import {AuthContext} from '../../context/AuthContext';

export const Header = () => {
  const [localString, setLocalString] = useState<any>('');
  const {searchText, setSearchText} = useContext(AuthContext);

  useLocation(); // Hook destinado à permissões de Localização
  const locationService = new GeolocationService();
  locationService
    .getLocation()
    .then(locationStrings => {
      setLocalString(locationStrings);
    })
    .catch(error => {
      console.error('Erro ao obter localização:', error);
    });

  const handleSearchChange = (text: string) => {
    setSearchText(text);
  };

  return (
    <HeaderContainer>
      <HeaderTitleContainer>
        <HeaderTitleText>Localização Atual</HeaderTitleText>
        <HeaderText>{localString}</HeaderText>
      </HeaderTitleContainer>
      <SearchContainer>
        <SvgUri width="20" height="20" uri={require('../assets/search.svg')} />
        <SearchInput
          placeholder="Pesquisar..."
          value={searchText}
          onChangeText={handleSearchChange}
        />
      </SearchContainer>
    </HeaderContainer>
  );
};
