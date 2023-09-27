import React from 'react';
import {
  CardContainer,
  CardDescription,
  CardImage,
  CardInfo,
  CardTitle,
} from './Cards.style';
import {IEventData} from '../../DataBases/types';
import {FormatDate} from '../utils/formatDate';

export const Card = ({name, local, time, image}: IEventData) => {
  return (
    <CardContainer>
      <CardImage
        source={{
          uri: image,
        }}
      />

      <CardInfo>
        <CardTitle>{name}</CardTitle>
        <CardDescription>{local}</CardDescription>
        <CardDescription>{FormatDate(time)}</CardDescription>
      </CardInfo>
    </CardContainer>
  );
};
