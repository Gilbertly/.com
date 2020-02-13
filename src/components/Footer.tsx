import * as React from 'react';

export const Footer = ({ props }: any) => {
  return (
    <section className="section-footer">
      <h4 className="footer-content">
        <span role="img" aria-label="wave">
          ⓒ
        </span>
        {' 2020, Gilbert Gathara. All Rights Reserved.'}
      </h4>
    </section>
  );
};
