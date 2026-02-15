import {
  Container,
  SimpleGrid,
  Group,
  Text,
  useMantineColorScheme,
  Box,
  useMantineTheme,
} from '@mantine/core';
import type { Feature } from '@/types';
import { Icon } from '@/components/ui/Icon';
import { useMediaQuery } from '@mantine/hooks';

const features: Feature[] = [
  {
    title: 'Secure Payment',
    icon: <Icon name="securePayment" width={24} height={24} />,
  },
  {
    title: 'Online Support',
    icon: <Icon name="onlineSupport" width={24} height={24} />,
  },
  {
    title: 'Free Shipping',
    icon: <Icon name="freeShipping" width={24} height={24} />,
  },
  {
    title: 'Best Value',
    icon: <Icon name="bestValue" width={24} height={24} />,
  },
];

const FeaturesBanner = () => {
  const { colorScheme } = useMantineColorScheme();
  const theme = useMantineTheme();
  const isiPad = useMediaQuery(`(max-width: ${theme.breakpoints.md})`);

  return (
    <Box bg={colorScheme === 'dark' ? 'dark.7' : 'rgba(49, 65, 140, 0.3)'}>
      <Container size="1202" px="md" py={{ base: 'xl', sm: 50 }}>
        <SimpleGrid
          cols={{ base: 2, sm: 2, md: 4 }} // ✅ responsive breakpoints
          spacing={{ base: 40, md: 80 }}
        >
          {features.map((f) => (
            <Group key={f.title} gap={isiPad ? 'md' : 'xl'} align="center">
              {f.icon}
              <Text
                fw={{ base: 400, sm: 600 }}
                c="white"
                fz={{ base: 16, sm: 18 }}
                ta="center"
              >
                {f.title}
              </Text>
            </Group>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default FeaturesBanner;
