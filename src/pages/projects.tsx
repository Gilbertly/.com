import type { NextPage } from 'next';
import { SimpleGrid, Text } from '@mantine/core';

const Projects: NextPage = () => {
  return (
    <SimpleGrid cols={1} m={24}>
      <Text size="xl" weight={700} color="dimmed">
        Projects
      </Text>
    </SimpleGrid>
  );
};

export default Projects;
