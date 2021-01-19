import * as React from 'react';

export const AboutMe = () => {
  return (
    <section className="section-aboutme">
      <h2 className="title">About Me</h2>
      <h3>{`
      I am a software engineer with an experience in end-to-end projects, based in Nairobi, Kenya.
      `}</h3>
      <h3>
        {`
      Nowadays my time and responsibilities are split between learning how to effectively become an
      IndieMaker, demystifying predictions from data models, and catching-up with family/friends.
      `}
        <span className="strikethrough">{'potato'}</span>
      </h3>
      <h3>{`Currently building serverless-first backends with JAMStack.`}</h3>
    </section>
  );
};
