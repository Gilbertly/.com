import type { NextPage } from 'next';
import { SimpleGrid } from '@mantine/core';
import { Hero } from '../components/Hero';

const Home: NextPage = () => {
  return (
    <SimpleGrid cols={1} m={24}>
      <Hero />
    </SimpleGrid>
  );
};

export default Home;
