import { Loader, Center, Text } from '@mantine/core';

const LoadingState = ({ message }: { message?: string }) => (
  <Center py="xl" style={{ flexDirection: 'column' }}>
    <Loader color="blue" size="lg" type="dots" />
    <Text mt="md" fw={600} c="blue">
      {message || 'Loading...'}
    </Text>
  </Center>
);
export default LoadingState;
