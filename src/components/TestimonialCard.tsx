import { Avatar, Box, Card, Group, Stack, Text } from '@mantine/core';
import { Icon } from '@/components/ui/Icon';
import StarRating from '@/components/ui/StartRating';

const TestimonialCard = ({ item }: { item: (typeof testimonials)[0] }) => (
  <Card
    radius={24}
    p={32}
    h="100%"
    bg="linear-gradient(180deg, #1E2538 0%, #0E1220 100%)"
  >
    <Stack justify="space-between" h="100%">
      <Box>
        <Icon name="quote" />
        <Text
          mt="md"
          c="white"
          fw={400}
          fz={{ base: 14, sm: 18 }}
          lh={1.6}
          lineClamp={6}
        >
          {item.text}
        </Text>
      </Box>

      <Stack gap="53" align="center">
        <StarRating count={item.rating} />
        <Group>
          <Avatar src={item.avatar} radius="xl" size={44} />
          <Box>
            <Text c="white" fw={600}>
              {item.name}
            </Text>
            <Text c="dimmed" fz={14}>
              {item.role}
            </Text>
          </Box>
        </Group>
      </Stack>
    </Stack>
  </Card>
);

export default TestimonialCard;
