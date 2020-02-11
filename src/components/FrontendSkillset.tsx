import * as React from 'react';
import { Skill } from './Skill';

interface Skill {
  name: string;
  url: string;
  alt: string;
}

export const FrontendSkillset = ({ frontendIcons }: any) => {
  const skills: Skill[] = [];

  frontendIcons.map((frontendIcon: any) => {
    const iconURL = frontendIcon.node.childImageSharp.fluid.src;

    if (iconURL.includes('fe-antd')) {
      skills.push({
        name: 'Ant Design',
        url: iconURL,
        alt: 'Ant Design Icon',
      });
    }
    if (iconURL.includes('fe-figma')) {
      skills.push({
        name: 'Figma',
        url: iconURL,
        alt: 'Figma Icon',
      });
    }
  });

  const skillset = skills.map(skill => (
    <Skill
      skillName={skill.name}
      skillURL={skill.url}
      skillAlt={skill.alt}
      key={skill.url}
    />
  ));

  return (
    <section className="section-frontend">
      <h2 className="title">Frontend Skillset</h2>
      <div className="skillset">{skillset}</div>
    </section>
  );
};
