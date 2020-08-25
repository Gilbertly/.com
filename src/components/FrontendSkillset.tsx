import * as React from 'react';
import { Skill, SkillProps } from './Skill';

export const FrontendSkillset = ({ frontendIcons }: any) => {
  const skills: SkillProps[] = [];

  frontendIcons.map((frontendIcon: any) => {
    const iconURL = frontendIcon.node.childImageSharp.fluid.src;

    if (iconURL.includes('fe-figma')) {
      skills.push({
        name: 'Figma',
        url: iconURL,
        alt: 'Figma Icon',
      });
    }
    if (iconURL.includes('fe-antd')) {
      skills.push({
        name: 'Ant Design',
        url: iconURL,
        alt: 'Ant Design Icon',
      });
    }
    if (iconURL.includes('fe-gatsby')) {
      skills.push({
        name: 'Gatsby',
        url: iconURL,
        alt: 'Gatsby Icon',
      });
    }
    if (iconURL.includes('fe-less')) {
      skills.push({
        name: 'Less',
        url: iconURL,
        alt: 'Less Icon',
      });
    }
    if (iconURL.includes('fe-jest')) {
      skills.push({
        name: 'Jest',
        url: iconURL,
        alt: 'Jest Icon',
      });
    }
    if (iconURL.includes('fe-typescript')) {
      skills.push({
        name: 'Typescript',
        url: iconURL,
        alt: 'Typescript Icon',
      });
    }
    if (iconURL.includes('fe-apollo')) {
      skills.push({
        name: 'Apollo Graphql',
        url: iconURL,
        alt: 'Apollo Graphql Icon',
      });
    }
    if (iconURL.includes('fe-postman')) {
      skills.push({
        name: 'Postman/Newman',
        url: iconURL,
        alt: 'Postman Icon',
      });
    }
    if (iconURL.includes('fe-lighthouse')) {
      skills.push({
        name: 'Lighthouse',
        url: iconURL,
        alt: 'Lighthouse Icon',
      });
    }
    if (iconURL.includes('fe-cypress')) {
      skills.push({
        name: 'Cypress',
        url: iconURL,
        alt: 'Cypress Icon',
      });
    }
    if (iconURL.includes('fe-sentry')) {
      skills.push({
        name: 'Sentry',
        url: iconURL,
        alt: 'Sentry Icon',
      });
    }
  });

  const skillset = skills.map(skill => (
    <Skill name={skill.name} url={skill.url} alt={skill.alt} key={skill.url} />
  ));

  return (
    <section className="section-frontend">
      <h2 className="title">Frontend Skillset</h2>
      <div className="skillset">{skillset}</div>
    </section>
  );
};
