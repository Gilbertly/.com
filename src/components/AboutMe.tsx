import * as React from 'react';

export const AboutMe = ({ props }: any) => {
  return (
    <section className="section-aboutme">
      <h2 className="title">About Me</h2>
      <h3>{`
      I'm a software and data engineer with an experience in end-to-end projects, based in Nairobi, Kenya.
      My focus is mainly working with data & dev teams to automate and scale workflows while keeping
      infrastructure healthy and secure.
      `}</h3>
      <h3>{`
      Over the last 2 years I've natured my data engineering skills, specifically in understanding
      how to build and deploy machine learning models (XGBoost, Tensorflow, PyTorch) on AWS using Sagemaker.
      `}</h3>
      <h3>{`
      Nowadays my time and responsibilities are split between learning how to effectively become an
      IndieMaker, demystifying predictions from data models, and catching-up with family/friends. I'm
      open for new opportunities and experiences. Potato.
      `}</h3>
    </section>
  );
};
