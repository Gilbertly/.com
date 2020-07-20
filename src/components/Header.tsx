import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

export const Header = () => {
  const data = useStaticQuery(graphql`
    query avatarProfile {
      avatarProfileIcon: file(relativePath: { eq: "img/avatarProfile.png" }) {
        childImageSharp {
          fluid(maxWidth: 112, maxHeight: 112, quality: 100) {
            src
          }
        }
      }
    }
  `);
  const avatarProfileIcon = data.avatarProfileIcon.childImageSharp.fluid.src;

  return (
    <section className="section-header">
      <div className="avatar">
        <img src={avatarProfileIcon} alt="Gilbert Gathara" />
      </div>
      <div className="content">
        <h2>
          <b>
            {'Hi '}
            <span role="img" aria-label="wave">
              👋🏽
            </span>
            {", I'm Gilbert Gathara"}
          </b>
        </h2>
        <h3>
          I collaborate with data and dev teams to build, scale, and keep
          infrastructure healthy for production apps & machine learning models
          on AWS.
        </h3>
      </div>
    </section>
  );
};
