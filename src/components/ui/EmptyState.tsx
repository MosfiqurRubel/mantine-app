import { Center, Text } from '@mantine/core';
import { IconPackageOff } from '@tabler/icons-react';

const EmptyState = ({ message }: { message?: string }) => (
  <Center py="xl" style={{ flexDirection: 'column' }}>
    <IconPackageOff size={48} color="gray" />
    <Text mt="md" fw={600} c="dimmed">
      {message || 'No products found!'}
    </Text>
  </Center>
);

export default EmptyState;
