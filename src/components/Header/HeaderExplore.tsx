import React, {useContext} from 'react';
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

export const HeaderExplore = () => {
  const {searchText, setSearchText, location} = useContext(AuthContext);

  const handleSearchChange = (text: string) => {
    setSearchText(text);
  };

  return (
    <HeaderContainer>
      <HeaderTitleContainer>
        <HeaderTitleText>Localização Atual</HeaderTitleText>
        <HeaderText>{location}</HeaderText>
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
