import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

export const Footer = ({ props }: any) => {
  const data = useStaticQuery(graphql`
    query FooterQuery {
      site {
        siteMetadata {
          commit
        }
      }
    }
  `);
  return (
    <section className="section-footer">
      <h4 className="footer-content">
        <span role="img" aria-label="copyright">
          ⓒ {' 2020, Gilbert Gathara. '}
        </span>
        <span>{`All Rights Reserved. ${data.site.siteMetadata.commit}`}</span>
      </h4>
    </section>
  );
};
