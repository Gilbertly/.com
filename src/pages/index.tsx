import type { NextPage } from 'next';
import Head from 'next/head';
import { Header } from '../components/Header';
import { Socials } from '../components/Socials';
import { AboutMe } from '../components/AboutMe';
import { Footer } from '../components/Footer';

const Home: NextPage = () => {
  return (
    <div className="page-index">
      <Head>
        <title>Gilbert Gathara</title>
        <meta charSet="utf-8" />
        <meta
          name="Gilbert Gathara"
          content="Software/Data Engineering Portfolio"
        />
        <link rel="canonical" href="https://gilbertly.com/" />
      </Head>

      <Header />
      <Socials />
      <AboutMe />

      <Footer />
    </div>
  );
};

export default Home;
