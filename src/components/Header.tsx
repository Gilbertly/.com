import * as React from 'react';
import Image from 'next/image';
import avatarProfileIcon from '../../public/img/avatarProfile.png';

export const Header = () => {
  return (
    <section className="section-header">
      <div className="avatar">
        <Image
          src={avatarProfileIcon}
          alt="Gilbert Gathara"
          placeholder="blur"
          quality={100}
          priority
        />
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
