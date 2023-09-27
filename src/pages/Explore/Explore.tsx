/* eslint-disable react-hooks/exhaustive-deps */
import React, {useContext, useEffect, useState} from 'react';
import {FlatList} from 'react-native';
import styled from 'styled-components/native';
import {HeaderExplore} from '../../components/Header/HeaderExplore';
import Footer from '../../components/Footer/Footer';
import {EventDBService} from '../../DataBases/EventDB.service';
import {Card} from '../../components/Cards/Card';
import {ListBox, Wrapper} from './Explore.styles';
import {AuthContext} from '../../context/AuthContext';
import {sortCardsByLevenshteinDistance} from '../../components/utils/sortCardsByLevenshteinDistance';
import {ICardItem} from '../../components/utils/types';

export const ExploreScreen = () => {
  const eventDBService = EventDBService.getInstance();
  const data = eventDBService.getEvents();
  const {searchText} = useContext(AuthContext);
  const [cards, setCards] = useState<ICardItem[]>();
  useEffect(() => {
    if (searchText.length > 0 && data) {
      setCards(sortCardsByLevenshteinDistance(searchText, data));
    }
  }, [searchText]);

  return (
    <Wrapper>
      <HeaderExplore />
      <Container>
        <ListBox>
          <FlatList
            data={searchText.length > 0 ? cards : data}
            keyExtractor={item => item.id}
            showsVerticalScrollIndicator={false}
            renderItem={({item}) => (
              <Card
                id={item.id}
                image={item.image}
                name={item.name}
                local={item.local}
                time={item.time}
              />
            )}
          />
        </ListBox>

        <Footer />
      </Container>
    </Wrapper>
  );
};

const Container = styled.View`
  flex: 1;
`;
