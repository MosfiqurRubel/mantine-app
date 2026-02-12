import { Group, Text } from '@mantine/core';
import { Icon } from '@/components/ui/Icon';

const StarRating = ({ count }: { count: number }) => (
  <Group gap={6}>
    {Array.from({ length: 5 }).map((_, i) => (
      <Text key={i} c={i < count ? '#E6B85C' : 'dimmed'} fz={20}>
        <Icon name="starEmpty" />
      </Text>
    ))}
  </Group>
);

export default StarRating;
