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
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';
import {formatTime} from '../utils/formatTime';

export const Card = ({name, local, time, image}: IEventData) => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  const handleNavigation = () => {
    navigation.navigate('Details', {name, time, image, local});
  };
  const dataDetails = formatTime(FormatDate(time));
  return (
    <CardContainer onPress={handleNavigation}>
      <CardImage
        source={{
          uri: image,
        }}
      />

      <CardInfo>
        <CardTitle>{name}</CardTitle>
        <CardDescription>{local}</CardDescription>
        <CardDescription>{dataDetails.day}</CardDescription>
      </CardInfo>
    </CardContainer>
  );
};
