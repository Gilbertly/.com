import type { NextPage } from 'next';
import Head from 'next/head';
import { Container, SimpleGrid } from '@mantine/core';
import { Header } from '../components/Header';

const Home: NextPage = () => {
  return (
    <Container>
      <SimpleGrid cols={1} m={24}>
        <Head>
          <title>Gilbert Gathara</title>
          <meta charSet="utf-8" />
          <meta
            name="Gilbert Gathara"
            content="Software/Data Engineering Portfolio"
          />
          <link rel="canonical" href="https://gilbertly.com/" />
        </Head>
        <Header
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
