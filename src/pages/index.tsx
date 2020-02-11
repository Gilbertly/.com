import * as React from 'react';
import { graphql } from 'gatsby';
import { Header } from '../components/Header';
import { FrontendSkillset } from '../components/FrontendSkillset';

const IndexPage = (props: any) => {
  const avatarSvg = props.data.avatarSvg.publicURL;
  const frontendIcons = props.data.frontendIcons.edges;

  return (
    <div className="page-index">
      <Header avatarSvg={avatarSvg} />
      <FrontendSkillset frontendIcons={frontendIcons} />
    </div>
  );
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageQuery {
    avatarSvg: file(relativePath: { eq: "img/avatarProfile.svg" }) {
      publicURL
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
