import { Container, Title, Text } from '@mantine/core';
import type { FC } from 'react';

type DefaultPageProps = {
  title: string;
  description?: string;
};

const DefaultPage: FC<DefaultPageProps> = ({ title, description }) => {
  return (
    <Container size="lg" py="xl">
      <Title order={1} mb="sm">
        {title}
      </Title>

      {description && (
        <Text c="dimmed" size="md">
          {description}
        </Text>
      )}
    </Container>
  );
};

export default DefaultPage;
