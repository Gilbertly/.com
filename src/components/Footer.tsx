import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

export const Footer = () => {
  const currentYear = new Date().getFullYear()
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
          &copy; {`2016-${currentYear}, Gilbert Gathara. `}
          {}
        </span>
        <span>{`All Rights Reserved. ${data.site.siteMetadata.commit}`}</span>
      </h4>
    </section>
  );
};
