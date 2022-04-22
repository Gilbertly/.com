import { Container } from '@mantine/core';
import { HeaderNav } from '../components/Header';

export const AppShell = (props: any) => {
  return (
    <>
      <HeaderNav />
      <Container>{props.children}</Container>
    </>
  );
};
