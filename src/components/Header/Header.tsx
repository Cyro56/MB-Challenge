/* eslint-disable react-hooks/exhaustive-deps */
import React, {useContext, useEffect, useState} from 'react';
import {GeolocationService} from '../Services/Getlocation.service';
import {useLocation} from '../hooks/useLocation';
import {
  HeaderContainer,
  HeaderText,
  HeaderTitleContainer,
  HeaderTitleText,
} from './Header.styles';
import {AuthContext} from '../../context/AuthContext';

export const Header = () => {
  const [localString, setLocalString] = useState<any>('');
  const {setLocation} = useContext(AuthContext);

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

  useEffect(() => {
    setLocation(localString);
  }, [localString]);

  return (
    <HeaderContainer>
      <HeaderTitleContainer>
        <HeaderTitleText>Localização Atual</HeaderTitleText>
        <HeaderText>{localString}</HeaderText>
      </HeaderTitleContainer>
    </HeaderContainer>
  );
};
