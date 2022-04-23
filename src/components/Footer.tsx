import React from 'react';
import { createStyles, Group, Anchor, Text, ActionIcon } from '@mantine/core';
import {
  BrandTwitter,
  BrandDribbble,
  BrandLinkedin,
  BrandGithub,
} from 'tabler-icons-react';

const useStyles = createStyles(theme => ({
  footer: {
    marginTop: 120,
    borderTop: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[2]
    }`,
  },

  inner: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: `${theme.spacing.md}px ${theme.spacing.md}px`,

    [theme.fn.smallerThan('sm')]: {
      flexDirection: 'column',
    },
  },

  links: {
    [theme.fn.smallerThan('sm')]: {
      marginTop: theme.spacing.lg,
      marginBottom: theme.spacing.sm,
    },
  },
}));

export function FooterNav() {
  const { classes } = useStyles();

  const currentYear = new Date().getFullYear();
  const gitHashFull = process.env.NEXT_PUBLIC_GIT_HASH || '';
  const gitHashShort = gitHashFull.slice(0, 7);
  const gitCommitUrl = `https://github.com/Gilbertly/.com/commit/${gitHashFull}`;

  const links = [
    {
      link: 'https://github.com/Gilbertly',
      label: 'Github',
      icon: <BrandGithub size={18} />,
    },
    {
      link: 'https://twitter.com/_gilbertly',
      label: 'Twitter',
      icon: <BrandTwitter size={18} />,
    },
    {
      link: 'https://dribbble.com/gilbertly',
      label: 'Dribbble',
      icon: <BrandDribbble size={18} />,
    },
    {
      link: 'https://www.linkedin.com/in/gilbert-gathara/',
      label: 'LinkedIn',
      icon: <BrandLinkedin size={18} />,
    },
  ];

  const socials = links.map(link => (
    <Anchor<'a'>
      color="dimmed"
      key={link.label}
      href={link.link}
      sx={{ lineHeight: 1 }}
      target="_blank"
      rel="noopener noreferrer"
      size="sm"
    >
      <ActionIcon size="lg" mr={8}>
        {link.icon}
      </ActionIcon>
    </Anchor>
  ));

  return (
    <div className={classes.footer}>
      <div className={classes.inner}>
        <Text aria-label="copyright" color="dimmed" size="sm" weight={500}>
          &copy; {`2016-${currentYear}`}
        </Text>

        <Group spacing={0} position="center" noWrap>
          {socials}
        </Group>

        <Group className={classes.links}>
          <Anchor<'a'>
            size="sm"
            color="dimmed"
            href={gitCommitUrl || ''}
            target="_blank"
            rel="noopener noreferrer"
          >
            {`#${gitHashShort}`}
          </Anchor>
        </Group>
      </div>
    </div>
  );
}
