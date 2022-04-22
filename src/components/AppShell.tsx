import { Container } from '@mantine/core';
import { HeaderNav } from '../components/Header';
import { FooterNav } from '../components/Footer';

export const AppShell = (props: any) => {
  return (
    <Container>
      <HeaderNav />
      {props.children}
      <FooterNav />
    </Container>
  );
};
