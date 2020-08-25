import * as React from 'react';
import { Skill, SkillProps } from './Skill';

export const DataSkillset = ({ dataIcons }: any) => {
  const skills: SkillProps[] = [];

  dataIcons.map((dataIcon: any) => {
    const iconURL = dataIcon.node.childImageSharp.fluid.src;

    if (iconURL.includes('data-python')) {
      skills.push({
        name: 'Python',
        url: iconURL,
        alt: 'Python Icon',
      });
    }
    if (iconURL.includes('data-python')) {
      skills.push({
        name: 'PyTest',
        url: iconURL,
        alt: 'PyTest Icon',
      });
    }
    if (iconURL.includes('data-numpy')) {
      skills.push({
        name: 'Numpy',
        url: iconURL,
        alt: 'Numpy Icon',
      });
    }
    if (iconURL.includes('data-pandas')) {
      skills.push({
        name: 'Pandas',
        url: iconURL,
        alt: 'Pandas Icon',
      });
    }
    if (iconURL.includes('data-python')) {
      skills.push({
        name: 'Hypothesis',
        url: iconURL,
        alt: 'Hypothesis Icon',
      });
    }
    if (iconURL.includes('data-postgresql')) {
      skills.push({
        name: 'PostgreSQL',
        url: iconURL,
        alt: 'PostgreSQL Icon',
      });
    }
    if (iconURL.includes('data-scrapy')) {
      skills.push({
        name: 'Scrapy/ScrapingHub',
        url: iconURL,
        alt: 'Scrapy Icon',
      });
    }
    if (iconURL.includes('data-colab')) {
      skills.push({
        name: 'Google Colab',
        url: iconURL,
        alt: 'Google Colab Icon',
      });
    }
    if (iconURL.includes('data-plotly')) {
      skills.push({
        name: 'Plotly',
        url: iconURL,
        alt: 'Plotly Icon',
      });
    }
    if (iconURL.includes('data-python')) {
      skills.push({
        name: 'Seaborn',
        url: iconURL,
        alt: 'Seaborn Icon',
      });
    }
    if (iconURL.includes('data-pytorch')) {
      skills.push({
        name: 'PyTorch',
        url: iconURL,
        alt: 'PyTorch Icon',
      });
    }
    if (iconURL.includes('data-tensorflow')) {
      skills.push({
        name: 'Tensorflow',
        url: iconURL,
        alt: 'Tensorflow Icon',
      });
    }
    if (iconURL.includes('data-sagemaker')) {
      skills.push({
        name: 'AWS Sagemaker',
        url: iconURL,
        alt: 'AWS Sagemaker Icon',
      });
    }
    if (iconURL.includes('data-glue')) {
      skills.push({
        name: 'AWS Glue ETL',
        url: iconURL,
        alt: 'AWS Glue ETL Icon',
      });
    }
    if (iconURL.includes('data-xgboost')) {
      skills.push({
        name: 'XGBoost',
        url: iconURL,
        alt: 'XGBoost Icon',
      });
    }
    if (iconURL.includes('data-sklearn')) {
      skills.push({
        name: 'Scikit-Learn',
        url: iconURL,
        alt: 'Scikit-Learn Icon',
      });
    }
    if (iconURL.includes('data-stepfunctions')) {
      skills.push({
        name: 'AWS StepFunctions',
        url: iconURL,
        alt: 'AWS StepFunctions Icon',
      });
    }
  });

  const skillset = skills.map(skill => (
    <Skill name={skill.name} url={skill.url} alt={skill.alt} key={skill.url} />
  ));

  return (
    <section className="section-dataskillset">
      <h2 className="title">Data Skillset</h2>
      <div className="skillset">{skillset}</div>
    </section>
  );
};
