import type { NextPage } from 'next';
import { Container, SimpleGrid, Text } from '@mantine/core';

const Blog: NextPage = () => {
  return (
    <Container>
      <SimpleGrid cols={1} m={24}>
        <Text size="xl" weight={700} color="dimmed">
          Blog
        </Text>
      </SimpleGrid>
    </Container>
  );
};

export default Blog;
