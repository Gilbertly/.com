import * as React from 'react';

export interface SkillProps {
  name: string;
  url: string;
  alt: string;
}

export const Skill = ({ skillName, skillURL, skillAlt }: any) => {
  return (
    <div className="skill">
      <div className="icon">
        <img src={skillURL} alt={skillAlt} />
      </div>
      <div className="content">
        <h4>{skillName}</h4>
      </div>
    </div>
  );
};
