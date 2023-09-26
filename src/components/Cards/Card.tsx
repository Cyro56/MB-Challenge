import React from 'react';
import {
  CardContainer,
  CardDescription,
  CardImage,
  CardInfo,
  CardTitle,
} from './Cards.style';
import {IEventData} from '../../DataBases/types';
import {Image} from 'react-native';

export const Card = ({id, name, local, time, image}: IEventData) => {
  return (
    <CardContainer>
      <CardImage
        source={{
          uri: image,
        }}
      />

      <CardInfo>
        <CardTitle>{name}</CardTitle>
        <CardDescription>Descrição do Evento</CardDescription>
      </CardInfo>
    </CardContainer>
  );
};
