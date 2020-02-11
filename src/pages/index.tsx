import * as React from 'react';
import { graphql } from 'gatsby';
import { Header } from '../components/Header';
import { Socials } from '../components/Socials';
import { FrontendSkillset } from '../components/FrontendSkillset';
import { Footer } from '../components/Footer';

const IndexPage = (props: any) => {
  const avatarSvg = props.data.avatarSvg.publicURL;
  const socialIcons = props.data.socialIcons.edges;
  const frontendIcons = props.data.frontendIcons.edges;

  return (
    <div className="page-index">
      <Header avatarSvg={avatarSvg} />
      <Socials socialIcons={socialIcons} />
      <FrontendSkillset frontendIcons={frontendIcons} />
      <Footer />
    </div>
  );
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageQuery {
    avatarSvg: file(relativePath: { eq: "img/avatarProfile.svg" }) {
      publicURL
    }
    socialIcons: allFile(filter: { absolutePath: { regex: "/(social-)/" } }) {
      edges {
        node {
          childImageSharp {
            fluid(maxWidth: 20, maxHeight: 20) {
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
  }
`;
