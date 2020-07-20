import * as React from 'react';
import { notification } from 'antd';
import { SmileOutlined } from '@ant-design/icons';

export const Header = ({ avatarProfile }: any) => {
  return (
    <section className="section-header">
      <div className="avatar">
        <img src={avatarProfile} alt="Gilbert Gathara" />
      </div>
      <div className="content">
        <h2>
          <b>
            {'Hi '}
            <span role="img" aria-label="wave">
              👋🏽
            </span>
            {", I'm Gilbert Gathara"}
          </b>
        </h2>
        <h3>
          I collaborate with data and dev teams to build, scale, and keep
          infrastructure healthy for production apps & machine learning models
          on AWS.
        </h3>
      </div>
    </section>
  );
};
