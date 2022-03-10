import type { NextPage } from 'next';
import Head from 'next/head';
import { Header } from '../components/Header';
import { Socials } from '../components/Socials';
import { AboutMe } from '../components/AboutMe';
// import { FrontendSkillset } from '../components/FrontendSkillset';
// import { BackendSkillset } from '../components/BackendSkillset';
// import { DataSkillset } from '../components/DataSkillset';
import { Footer } from '../components/Footer';

const Home: NextPage = () => {
  return (
    <div className="page-index">
      <Head>
        <title>Gilbert Gathara</title>
        <meta
          name="Gilbert Gathara"
          content="Software/Data Engineering Portfolio"
        />
        <link rel="canonical" href="https://gilbertly.com/" />
      </Head>

      <Header />
      <Socials />
      <AboutMe />

      {/* <FrontendSkillset frontendIcons={frontendIcons} />
      <BackendSkillset backendIcons={backendIcons} awsIcons={backendAWSIcons} />
      <DataSkillset dataIcons={dataIcons} /> */}
      <Footer />
    </div>
  );
};

export default Home;
