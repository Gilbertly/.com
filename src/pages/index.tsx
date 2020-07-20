import * as React from 'react';
import { graphql } from 'gatsby';
import { Helmet } from 'react-helmet';

import { Header } from '../components/Header';
import { Socials } from '../components/Socials';
import { AboutMe } from '../components/AboutMe';
import { FrontendSkillset } from '../components/FrontendSkillset';
import { BackendSkillset } from '../components/BackendSkillset';
import { DataSkillset } from '../components/DataSkillset';
import { Footer } from '../components/Footer';

const IndexPage = (props: any) => {
  const socialIcons = props.data.socialIcons.edges;
  const frontendIcons = props.data.frontendIcons.edges;
  const backendIcons = props.data.backendIcons.edges;
  const backendAWSIcons = props.data.backendAWSIcons.edges;
  const dataIcons = props.data.dataIcons.edges;

  return (
    <div className="page-index">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Gilbert Gathara</title>
        <meta
          name="Gilbert Gathara"
          content="Software/Data Engineering Portfolio"
        />
        <link rel="canonical" href="https://gilbertly.com/" />
      </Helmet>
      <Header />
      <Socials socialIcons={socialIcons} />
      <AboutMe />
      <FrontendSkillset frontendIcons={frontendIcons} />
      <BackendSkillset backendIcons={backendIcons} awsIcons={backendAWSIcons} />
      <DataSkillset dataIcons={dataIcons} />
      <Footer />
    </div>
  );
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageQuery {
    socialIcons: allFile(filter: { absolutePath: { regex: "/(social-)/" } }) {
      edges {
        node {
          childImageSharp {
            fluid(maxWidth: 21, maxHeight: 21) {
              src
            }
          }
        }
      }
    }
    frontendIcons: allFile(filter: { absolutePath: { regex: "/(fe-)/" } }) {
      edges {
        node {
          childImageSharp {
            fluid(maxWidth: 22, maxHeight: 22) {
              src
            }
          }
        }
      }
    }
    backendIcons: allFile(filter: { absolutePath: { regex: "/(be-svc-)/" } }) {
      edges {
        node {
          childImageSharp {
            fluid(maxWidth: 22, maxHeight: 22) {
              src
            }
          }
        }
      }
    }
    backendAWSIcons: allFile(
      filter: { absolutePath: { regex: "/(be-aws-)/" } }
    ) {
      edges {
        node {
          childImageSharp {
            fluid(maxWidth: 22, maxHeight: 22) {
              src
            }
          }
        }
      }
    }
    dataIcons: allFile(filter: { absolutePath: { regex: "/(data-)/" } }) {
      edges {
        node {
          childImageSharp {
            fluid(maxWidth: 22, maxHeight: 22) {
              src
            }
          }
        }
      }
    }
  }
`;
