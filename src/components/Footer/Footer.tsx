import React from 'react';
import {FooterContainer, IconContainer, StyledImage} from './Footer.styles';

const Footer = () => {
  return (
    <FooterContainer>
      <IconContainer>
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
