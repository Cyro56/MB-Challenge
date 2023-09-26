import React from 'react';
import {Container, Title} from './Home.styles';
import {Header} from '../../components/Header/Header';

export const Home = () => {
  return (
    <>
      <Header />
      <Container>
        <Title>Hello, MB Labs!</Title>
      </Container>
    </>
  );
};
