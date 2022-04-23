import React from 'react';
import Link from 'next/link';
import {
  createStyles,
  Header,
  Container,
  Group,
  Burger,
  Paper,
  Transition,
  ActionIcon,
  Text,
  useMantineColorScheme,
} from '@mantine/core';
import { useBooleanToggle } from '@mantine/hooks';
import { Sun, MoonStars } from 'tabler-icons-react';
import NextImage from './Image';
import avatarProfileIcon from '../../public/img/avatarProfile.png';

const HEADER_HEIGHT = 60;

const useStyles = createStyles(theme => ({
  root: {
    position: 'relative',
    zIndex: 1,
  },

  dropdown: {
    position: 'absolute',
    top: HEADER_HEIGHT,
    left: 0,
    right: 0,
    zIndex: 0,
    borderTopRightRadius: 0,
    borderTopLeftRadius: 0,
    borderTopWidth: 0,
    overflow: 'hidden',

    [theme.fn.largerThan('sm')]: {
      display: 'none',
    },
  },

  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '100%',
  },

  links: {
    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
  },

  burger: {
    [theme.fn.largerThan('sm')]: {
      display: 'none',
    },
  },

  link: {
    display: 'block',
    lineHeight: 1,
    padding: '8px 12px',
    borderRadius: theme.radius.sm,
    textDecoration: 'none',
    color:
      theme.colorScheme === 'dark'
        ? theme.colors.dark[0]
        : theme.colors.gray[7],
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    '&:hover': {
      backgroundColor:
        theme.colorScheme === 'dark'
          ? theme.colors.dark[6]
          : theme.colors.gray[0],
    },

    [theme.fn.smallerThan('sm')]: {
      borderRadius: 0,
      padding: theme.spacing.md,
    },
  },

  linkActive: {
    '&, &:hover': {
      backgroundColor:
        theme.colorScheme === 'dark'
          ? theme.fn.rgba(theme.colors[theme.primaryColor][9], 0.25)
          : theme.colors[theme.primaryColor][0],
      color:
        theme.colors[theme.primaryColor][theme.colorScheme === 'dark' ? 3 : 7],
    },
  },
}));

export function HeaderNav() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const [opened, toggleOpened] = useBooleanToggle(false);
  const { classes } = useStyles();

  const dark = colorScheme === 'dark';
  const links = [
    { link: '/', label: 'Home' },
    { link: '/projects', label: 'Projects' },
    { link: '/blog', label: 'Blog' },
  ];

  const items = links.map(link => (
    <Link href={link.link} key={link.label}>
      <a key={link.label} className={classes.link}>
        {link.label}
      </a>
    </Link>
  ));

  return (
    <Header height={HEADER_HEIGHT} mb={16} mt={4} className={classes.root}>
      <Container className={classes.header}>
        <Group>
          <NextImage
            src={avatarProfileIcon}
            alt="Gilbert Gathara"
            placeholder="blur"
            quality={100}
            height="42"
            width="42"
            priority
          />
          <Text size="xl" weight={700} color="dimmed">
            Gilbert Gathara
          </Text>
        </Group>
        <Group spacing={5} className={classes.links}>
          {items}
          <ActionIcon
            ml={8}
            variant="outline"
            color={dark ? 'yellow' : 'blue'}
            onClick={() => toggleColorScheme()}
            title="Toggle color scheme"
          >
            {dark ? <Sun size={18} /> : <MoonStars size={18} />}
          </ActionIcon>
        </Group>

        <Burger
          opened={opened}
          onClick={() => toggleOpened()}
          className={classes.burger}
          size="sm"
        />

        <Transition transition="pop-top-right" duration={200} mounted={opened}>
          {styles => (
            <Paper className={classes.dropdown} withBorder style={styles}>
              {items}
            </Paper>
          )}
        </Transition>
      </Container>
    </Header>
  );
}
