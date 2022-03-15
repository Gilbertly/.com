import * as React from 'react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  const gitHashFull = process.env.NEXT_PUBLIC_GIT_HASH || '';
  const gitHashShort = gitHashFull.slice(0, 7);
  const gitCommitUrl = `https://github.com/Gilbertly/.com/commit/${gitHashFull}`;

  return (
    <footer className="section-footer">
      <h4 className="footer-content">
        <span role="img" aria-label="copyright">
          &copy; {`2016-${currentYear}, Gilbert Gathara. `}
        </span>
        <span>
          {`All Rights Reserved. Commit `}
          <a
            href={gitCommitUrl || ''}
            target="_blank"
            rel="noopener noreferrer"
          >{`#${gitHashShort}`}</a>
        </span>
      </h4>
    </footer>
  );
};
