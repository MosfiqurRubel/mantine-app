import { Container, Title, Text } from '@mantine/core';
import type { FC, ReactNode } from 'react';

type AboutProps = {
  children?: ReactNode;
};

const About: FC<AboutProps> = ({ children }) => {
  return (
    <Container size="1202" px="md" py="xl">
      <Title order={1} mb="sm" tt="capitalize">
        About us {children}
      </Title>

      <Text c="dimmed" size="md">
        sadfds asds
      </Text>
    </Container>
  );
};

export default About;
