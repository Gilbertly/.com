import * as React from 'react';
import { Button } from 'antd';

export const Header = ({ avatarSvg }: any) => {
  return (
    <section className="section-header">
      <div className="avatar">
        <img src={avatarSvg} alt="Gilbert Gathara" />
      </div>
      <div className="content">
        <h2>
          <b>
            {"Hi, I'm Gilbert Gathara "}
            <span role="img" aria-label="wave">
              👋🏽
            </span>
          </b>
        </h2>
        <h3>
          I collaborate with data and dev teams to build, scale, and keep
          infrastructure healthy for production apps & machine learning models.
        </h3>
        <Button type="primary" icon="download">
          Download Resume
        </Button>
      </div>
    </section>
  );
};
