import type { NextPage } from 'next';
import { SimpleGrid, Text } from '@mantine/core';

const Blog: NextPage = () => {
  return (
    <SimpleGrid cols={1} m={24}>
      <Text size="xl" weight={700} color="dimmed">
        Blog
      </Text>
    </SimpleGrid>
  );
};

export default Blog;
