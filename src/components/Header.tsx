import * as React from 'react';
import { Button, notification } from 'antd';
import { SmileOutlined, FilePdfOutlined } from '@ant-design/icons';

export const Header = ({ avatarProfile }: any) => {
  const openNotification = () => {
    notification.open({
      message: 'Resume Request',
      description: `
      Great! Love the enthusiasm. However right now I'm in the process of
      updating my skillset projects and my resume needs a clean refresh.`,
      icon: <SmileOutlined />,
      duration: 10,
    });
  };
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
        <Button
          type="primary"
          icon={<FilePdfOutlined />}
          onClick={openNotification}
        >
          Request Resume
        </Button>
      </div>
    </section>
  );
};
