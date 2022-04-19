import { Text, Group, ActionIcon, useMantineColorScheme } from '@mantine/core';
import { Sun, MoonStars } from 'tabler-icons-react';
import NextImage from './Image';
import avatarProfileIcon from '../../public/img/avatarProfile.png';

interface UserInfoProps {
  title: string;
  intro: string;
}

export const Header = ({ title, intro }: UserInfoProps) => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === 'dark';

  return (
    <div>
      <Group noWrap>
        <NextImage
          src={avatarProfileIcon}
          alt="Gilbert Gathara"
          placeholder="blur"
          quality={100}
          height="140"
          width="140"
          priority
        />
        <div>
          <Text size="xl" weight={700} color="dimmed">
            {title}
          </Text>

          <Text size="lg" weight={500}>
            {intro}
          </Text>
        </div>
        <ActionIcon
          variant="outline"
          color={dark ? 'yellow' : 'blue'}
          onClick={() => toggleColorScheme()}
          title="Toggle color scheme"
        >
          {dark ? <Sun size={18} /> : <MoonStars size={18} />}
        </ActionIcon>
      </Group>
    </div>
  );
};
