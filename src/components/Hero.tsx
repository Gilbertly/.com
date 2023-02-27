import { Text, Group } from '@mantine/core';

export const Hero = () => {
  return (
    <div>
      <Group noWrap mt={64}>
        <div>
          <Text size="xl" weight={700} color="dimmed">
            Hi 👋🏽,
          </Text>

          <Text size="lg" weight={500}>
            I collaborate with data and dev teams to build, scale, and keep
            infrastructure healthy for production apps & machine learning models
            on AWS.
          </Text>
        </div>
      </Group>
    </div>
  );
};
