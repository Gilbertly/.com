import { Text, Group } from '@mantine/core';
import NextImage from './Image';
import avatarProfileIcon from '../../public/img/avatarProfile.png';

interface UserInfoProps {
  title: string;
  intro: string;
}

export const Hero = ({ title, intro }: UserInfoProps) => {
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
      </Group>
    </div>
  );
};
