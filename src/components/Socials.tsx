import * as React from 'react';

interface SocialProps {
  name: string;
  url: string;
  alt: string;
  link: string;
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
        link: '',
      });
    } else if (iconURL.includes('social-github')) {
      socials.push({
        name: 'Github',
        url: iconURL,
        alt: 'Github Icon',
        link: 'https://github.com/Gilbertly',
      });
    } else if (iconURL.includes('social-dribbble')) {
      socials.push({
        name: 'Dribble',
        url: iconURL,
        alt: 'Dribbble Icon',
        link: 'https://dribbble.com/gilbertly/buckets',
      });
    } else if (iconURL.includes('social-keybase')) {
      socials.push({
        name: 'Keybase',
        url: iconURL,
        alt: 'Keybase Icon',
        link: 'https://keybase.io/gilbertly',
      });
    } else if (iconURL.includes('social-twitter')) {
      socials.push({
        name: 'Twitter',
        url: iconURL,
        alt: 'Twitter Icon',
        link: 'https://twitter.com/GilbertGathara',
      });
    } else if (iconURL.includes('social-linkedin')) {
      socials.push({
        name: 'LinkedIn',
        url: iconURL,
        alt: 'LinkedIn Icon',
        link: 'https://www.linkedin.com/in/gilbert-gathara/',
      });
    } else if (iconURL.includes('social-kaggle')) {
      socials.push({
        name: 'Kaggle',
        url: iconURL,
        alt: 'Kaggle Icon',
        link: 'https://www.kaggle.com/gilbertly',
      });
    } else if (iconURL.includes('social-producthunt')) {
      socials.push({
        name: 'ProductHunt',
        url: iconURL,
        alt: 'ProductHunt Icon',
        link: 'https://www.producthunt.com/@gilbertgathara',
      });
    }
  });

  const socialset = socials.map(social => (
    <a
      className="social"
      key={social.alt}
      href={social.link}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="icon">
        <img src={social.url} alt={social.alt} />
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
