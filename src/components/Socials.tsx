import * as React from 'react';
import Image from 'next/image';
import githubIcon from '../../public/icons/socials/social-github.png';
import keybaseIcon from '../../public/icons/socials/social-keybase.png';
import twitterIcon from '../../public/icons/socials/social-twitter.png';
import kaggleIcon from '../../public/icons/socials/social-kaggle.png';
import linkedinIcon from '../../public/icons/socials/social-linkedin.png';

type SocialProps = {
  name: string;
  img: StaticImageData;
  height: number;
  width: number;
  alt: string;
  link: string;
};

export const Socials = ({ socialIcons }: any) => {
  const socials: SocialProps[] = [
    {
      name: 'Github',
      img: githubIcon,
      height: 22,
      width: 22,
      alt: 'Github Icon',
      link: 'https://github.com/Gilbertly',
    },
    {
      name: 'Keybase',
      img: keybaseIcon,
      height: 22,
      width: 22,
      alt: 'Keybase Icon',
      link: 'https://keybase.io/gilbertly',
    },
    {
      name: 'Twitter',
      img: twitterIcon,
      height: 22,
      width: 22,
      alt: 'Twitter Icon',
      link: 'https://twitter.com/_gilbertly',
    },
    {
      name: 'LinkedIn',
      img: linkedinIcon,
      height: 22,
      width: 22,
      alt: 'LinkedIn Icon',
      link: 'https://www.linkedin.com/in/gilbert-gathara/',
    },
    {
      name: 'Kaggle',
      img: kaggleIcon,
      height: 22,
      width: 22,
      alt: 'Kaggle Icon',
      link: 'https://www.kaggle.com/gilbertly',
    },
  ];

  const socialset = socials.map(social => (
    <a
      className="social"
      key={social.alt}
      href={social.link}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="icon">
        <Image
          src={social.img}
          alt={social.alt}
          width={social.width}
          height={social.height}
        />
      </div>
      <h4>{social.name}</h4>
    </a>
  ));

  return (
    <section className="section-socials">
      <h2 className="title">Socials / Interwebs</h2>
      <div className="socialset">{socialset}</div>
    </section>
  );
};
