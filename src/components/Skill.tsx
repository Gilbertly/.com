import * as React from 'react';

export interface SkillProps {
  name: string;
  url: string;
  alt: string;
}

export const Skill = ({ name, url, alt }: SkillProps) => {
  return (
    <div className="skill">
      <div className="icon">
        <img src={url} alt={alt} />
      </div>
      <div className="content">
        <h4>{name}</h4>
      </div>
    </div>
  );
};
