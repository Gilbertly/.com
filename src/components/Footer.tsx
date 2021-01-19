import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  const data = useStaticQuery(graphql`
    query FooterQuery {
      site {
        siteMetadata {
          gitHash
        }
      }
    }
  `);
  const gitHashFull = data.site.siteMetadata.gitHash;
  const gitHashShort = gitHashFull.slice(0, 7);
  const gitCommitUrl = `https://github.com/Gilbertly/.com/commit/${gitHashFull}`;

  return (
    <section className="section-footer">
      <h4 className="footer-content">
        <span role="img" aria-label="copyright">
          &copy; {`2016-${currentYear}, Gilbert Gathara. `}
        </span>
        <span>
          {`All Rights Reserved. Commit `}
          <a
            href={gitCommitUrl}
            target="_blank"
            rel="noopener noreferrer"
          >{`#${gitHashShort}`}</a>
        </span>
      </h4>
    </section>
  );
};
