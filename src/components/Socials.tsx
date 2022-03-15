import * as React from 'react';
import Link from 'next/link';
import {
  MailOutlined,
  GithubOutlined,
  TwitterOutlined,
  LinkedinFilled,
  DribbbleOutlined,
} from '@ant-design/icons';

export const Socials = () => {
  const socials = [
    {
      name: 'hello@gilbertly.com',
      icon: <MailOutlined />,
      link: 'mailto:hello@gilbertly.com',
    },
    {
      name: 'Github',
      icon: <GithubOutlined />,
      link: 'https://github.com/Gilbertly',
    },
    {
      name: 'Twitter',
      icon: <TwitterOutlined />,
      link: 'https://twitter.com/_gilbertly',
    },
    {
      name: 'LinkedIn',
      icon: <LinkedinFilled />,
      link: 'https://www.linkedin.com/in/gilbert-gathara/',
    },
    {
      name: 'Dribbble',
      icon: <DribbbleOutlined />,
      link: 'https://dribbble.com/gilbertly',
    },
  ];

  const socialset = socials.map(social => (
    <span className="social" key={social.name}>
      <Link href={social.link}>
        <a target="_blank" rel="noopener noreferrer">
          {social.icon}
          {social.name}
        </a>
      </Link>
    </span>
  ));

  return (
    <section className="section-socials">
      <h2 className="title">Socials / Interwebs</h2>
      <div className="socialset">{socialset}</div>
    </section>
  );
};
