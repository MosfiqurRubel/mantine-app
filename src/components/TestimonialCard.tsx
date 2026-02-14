import { Avatar, Box, Card, Group, Rating, Stack, Text } from '@mantine/core';
import { Icon } from '@/components/ui/Icon';
import { useMediaQuery } from '@mantine/hooks';

const TestimonialCard = ({ item }: { item: (typeof testimonials)[0] }) => {
  const isMobile = useMediaQuery('(max-width: 48em)'); // < 768px

  return (
    <Card
      radius={24}
      px={{ base: 25, sm: 32 }}
      pt={{ base: 25, sm: 32 }}
      pb={{ base: 30, sm: 37 }}
      h="100%"
      bg="linear-gradient(180deg, #1E2538 0%, #0E1220 100%)"
    >
      <Stack justify="space-between" h="100%">
        <Box>
          <Icon name="quote" />
          <Text
            mt={{ base: 'xs', sm: 'md' }}
            c="white"
            fw={400}
            fz={{ base: 14, sm: 18 }}
            lh={{ base: 1.4, sm: 1.6 }}
            lineClamp={6}
          >
            {item.text}
          </Text>
        </Box>

        <Stack gap={isMobile ? 36 : 53} align="center">
          <Rating
            value={item.rating}
            emptySymbol={
              <Icon
                name="starEmpty"
                color="#E6B85C"
                width={isMobile ? 13 : 24}
                height={isMobile ? 13 : 24}
              />
            }
            fullSymbol={
              <Icon
                name="starFull"
                color="#E6B85C"
                width={isMobile ? 13 : 24}
                height={isMobile ? 13 : 24}
              />
            }
            style={{ gap: isMobile ? 7 : 12 }}
          />
          <Group gap={isMobile ? 'sm' : 20}>
            <Avatar src={item.avatar} radius="xl" size={isMobile ? 36 : 60} />
            <Box>
              <Text c="white" fz={isMobile ? 14 : 20} fw="bold">
                {item.name}
              </Text>
              <Text
                c="rgba(255,255,255,0.5)"
                fz={isMobile ? 'xs' : 24}
                fw="bold"
              >
                {item.role}
              </Text>
            </Box>
          </Group>
        </Stack>
      </Stack>
    </Card>
  );
};

export default TestimonialCard;
