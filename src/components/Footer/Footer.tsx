import React from 'react';
import {FooterContainer, IconContainer, StyledImage} from './Footer.styles';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

const Footer = () => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  const handleNavigation = (screen: string) => {
    navigation.navigate(screen);
  };
  return (
    <FooterContainer>
      <IconContainer onPress={() => handleNavigation('Explore')}>
        <StyledImage source={require('../../components/assets/explore.png')} />
      </IconContainer>
      <IconContainer>
        <StyledImage source={require('../../components/assets/plus.png')} />
      </IconContainer>

      <IconContainer>
        <StyledImage source={require('../../components/assets/shopping.png')} />
      </IconContainer>
    </FooterContainer>
  );
};

export default Footer;
