import React, {useState} from 'react';
import styled from 'styled-components/native';
import {GeolocationService} from '../Services/Getlocation.service';
import {useLocation} from '../hooks/useLocation';

const HeaderContainer = styled.View`
  background-color: #4876ee;
  height: 150px;
  padding: 10px 0;
  border-radius: 0px 0px 33px 33px;
`;

export const HeaderTitleContainer = styled.View`
  align-items: center;
`;

const HeaderTitleText = styled.Text`
  color: #fff;
  font-size: 24px;
  font-weight: bold;
`;
const HeaderText = styled.Text`
  color: #fff;
  font-size: 18px;
`;

export const Header = () => {
  const [localString, setLocalString] = useState<any>('');
  useLocation();
  const locationService = new GeolocationService();
  locationService
    .getLocation()
    .then(locationStrings => {
      setLocalString(locationStrings);
    })
    .catch(error => {
      console.error('Erro ao obter localização:', error);
    });

  return (
    <HeaderContainer>
      <HeaderTitleContainer>
        <HeaderTitleText>Localização Atual</HeaderTitleText>
        <HeaderText>{localString}</HeaderText>
      </HeaderTitleContainer>
    </HeaderContainer>
  );
};
