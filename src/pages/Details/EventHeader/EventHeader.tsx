import React from 'react';
import {HeaderBackground, IconBox, IconWrapper} from './EventHeader.styles';
import SvgUri from 'react-native-svg-uri';

export const EventHeader = ({image}: {image: string}) => {
  return (
    <HeaderBackground
      source={{
        uri: image,
      }}>
      <IconWrapper>
        <IconBox>
          <SvgUri
            width="20"
            height="20"
            source={require('../../../components/assets/bell.svg')}
          />
        </IconBox>

        <IconBox>
          <SvgUri
            width="20"
            height="20"
            source={require('../../../components/assets/bell.svg')}
          />
        </IconBox>
      </IconWrapper>
    </HeaderBackground>
  );
};
