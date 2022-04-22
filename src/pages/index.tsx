import type { NextPage } from 'next';
import { Container, SimpleGrid } from '@mantine/core';
import { Hero } from '../components/Hero';

const Home: NextPage = () => {
  return (
    <Container>
      <SimpleGrid cols={1} m={24}>
        <Hero
          title="Hi 👋🏽, I'm Gilbert Gathara"
          intro="I collaborate with data and dev teams to build, scale, and keep
          infrastructure healthy for production apps & machine learning models
          on AWS."
        />
      </SimpleGrid>
    </Container>
  );
};

export default Home;
