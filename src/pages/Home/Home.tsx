import React from 'react';
import {FlatList} from 'react-native';
import {Container, Title, Wrapper} from './Home.styles';
import {Header} from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import {Card} from '../../components/Cards/Card';
import {EventDBService} from '../../DataBases/EventDB.service';

export const Home = () => {
  const eventDBService = EventDBService.getInstance();
  const data = eventDBService.getEvents()?.slice(0, 3);

  return (
    <Wrapper>
      <Header />
      <Container>
        <Title>Eventos Recomendados</Title>
        <FlatList
          horizontal={true} // Defina horizontal para true para rolar lateralmente
          data={data}
          keyExtractor={item => item.id}
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
      </Container>
      <Footer />
    </Wrapper>
  );
};
