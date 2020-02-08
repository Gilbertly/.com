import * as React from 'react';
import { graphql } from 'gatsby';
import { Header } from '../components/Header';

const IndexPage = (props: any) => {
  const avatarSvg = props.data.avatarSvg.publicURL;

  return (
    <div className="page-index">
      <Header avatarSvg={avatarSvg} />
    </div>
  );
};

export default IndexPage;

export const pageQuery = graphql`
  query {
    avatarSvg: file(relativePath: { eq: "img/avatarProfile.svg" }) {
      publicURL
    }
  }
`;
