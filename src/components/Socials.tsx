import * as React from 'react';

interface SocialProps {
  name: string;
  url: string;
  alt: string;
}

export const Socials = ({ socialIcons }: any) => {
  const socials: SocialProps[] = [];

  socialIcons.map((socialIcon: any) => {
    const iconURL = socialIcon.node.childImageSharp.fluid.src;

    if (iconURL.includes('social-mail')) {
      socials.push({
        name: 'Email',
        url: iconURL,
        alt: 'Email Icon',
      });
    }
    if (iconURL.includes('social-github')) {
      socials.push({
        name: 'Github',
        url: iconURL,
        alt: 'Github Icon',
      });
    }
    if (iconURL.includes('social-dribbble')) {
      socials.push({
        name: 'Dribble',
        url: iconURL,
        alt: 'Dribbble Icon',
      });
    }
    if (iconURL.includes('social-keybase')) {
      socials.push({
        name: 'Keybase',
        url: iconURL,
        alt: 'Keybase Icon',
      });
    }
    if (iconURL.includes('social-twitter')) {
      socials.push({
        name: 'Twitter',
        url: iconURL,
        alt: 'Twitter Icon',
      });
    }
    if (iconURL.includes('social-linkedin')) {
      socials.push({
        name: 'LinkedIn',
        url: iconURL,
        alt: 'LinkedIn Icon',
      });
    }
    if (iconURL.includes('social-kaggle')) {
      socials.push({
        name: 'Kaggle',
        url: iconURL,
        alt: 'Kaggle Icon',
      });
    }
    if (iconURL.includes('social-producthunt')) {
      socials.push({
        name: 'ProductHunt',
        url: iconURL,
        alt: 'ProductHunt Icon',
      });
    }
  });

  const socialset = socials.map(social => (
    <div className="social" key={social.alt}>
      <div className="icon">
        <img src={social.url} alt={social.alt} />
      </div>
      <h4>{social.name}</h4>
    </div>
  ));

  return (
    <section className="section-socials">
      <h2 className="title">Socials / Interwebs</h2>
      <div className="socialset">{socialset}</div>
    </section>
  );
};
