// import React from 'react';
import Link from 'next/link';
import {
  Header,
  Container,
  Group,
  Burger,
  // Paper,
  // Transition,
  ActionIcon,
  Text,
  useMantineColorScheme,
} from '@mantine/core';
// import { useBooleanToggle } from '@mantine/hooks';
import { Sun, MoonStars } from 'tabler-icons-react';
import NextImage from './Image';
import avatarProfileIcon from '../../public/img/avatarProfile.png';
import { useHeaderNav } from '../hooks/styles/useHeaderNav';

export function HeaderNav() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  // const [opened, toggleOpened] = useBooleanToggle(false);
  const { classes } = useHeaderNav();

  const dark = colorScheme === 'dark';
  const links = [
    { link: '/', label: 'Home' },
    { link: '/projects', label: 'Projects' },
    { link: '/blog', label: 'Blog' },
  ];

  const items = links.map(link => (
    <Link href={link.link} key={link.label}>
      {/* <a key={link.label} className={classes.link}> */}
      {link.label}
      {/* </a> */}
    </Link>
  ));

  return (
    <Header height={60} mb={16} mt={4} className={classes.root}>
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
          opened={false}
          // onClick={() => toggleOpened()}
          className={classes.burger}
          size="sm"
        />
        {/*
        <Transition transition="pop-top-right" duration={200} mounted={false}>
          {styles => (
            <Paper className={classes.dropdown} withBorder style={styles}>
              {items}
            </Paper>
          )}
        </Transition> */}
      </Container>
    </Header>
  );
}
