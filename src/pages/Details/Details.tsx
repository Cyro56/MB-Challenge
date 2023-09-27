import React from 'react';
import {
  EventDetails,
  EventDetailsContainer,
  EventTitle,
  InfoBox,
  InfoContainer,
  InfoDetails,
  InfoDetailsText,
  InfoWrapper,
  LogoBox,
} from './Details.styles';
import {EventHeader} from './EventHeader/EventHeader';
import {useRoute} from '@react-navigation/native';
import {StyledImage} from '../AuthScreen/Auth.styles';
import {FormatDate} from '../../components/utils/formatDate';
import {formatTime} from '../../components/utils/formatTime';

export const Details = () => {
  const route = useRoute();

  // @ts-ignore
  const {name, time, image, local} = route.params;

  const dataDetails = formatTime(FormatDate(time));

  return (
    <>
      <EventHeader image={image} />
      <EventDetailsContainer>
        <EventTitle>{name}</EventTitle>
        <InfoContainer>
          <InfoWrapper>
            <LogoBox>
              <StyledImage
                source={require('../../components/assets/calendar.png')}
              />
            </LogoBox>
            <InfoBox>
              <InfoDetails>{dataDetails.day}</InfoDetails>
              <InfoDetailsText>{dataDetails.Time}</InfoDetailsText>
            </InfoBox>
          </InfoWrapper>
          <InfoWrapper>
            <LogoBox>
              <StyledImage
                source={require('../../components/assets/local.png')}
              />
            </LogoBox>
            <InfoBox>
              <InfoDetails>{local}</InfoDetails>
            </InfoBox>
          </InfoWrapper>
          <EventTitle>Sobre o Evento</EventTitle>
          <EventDetails>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            vehicula felis a quam laoreet, vel convallis quam ultrices. Fusce
            bibendum tincidunt orci, id condimentum justo.
          </EventDetails>
        </InfoContainer>
      </EventDetailsContainer>
    </>
  );
};
