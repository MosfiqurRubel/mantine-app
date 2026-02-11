import SearchSection from '@/components/ui/SearchSection';
import {
  Box,
  Button,
  Container,
  Stack,
  Text,
  Title,
  useMantineColorScheme,
} from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';

const Home = () => {
  const { colorScheme } = useMantineColorScheme();

  const isMobile = useMediaQuery('(max-width: 48em)'); // < 768px

  return (
    <Container size="1170" h="100%" px={isMobile ? 'sm' : 0}>
      <Stack
        maw={isMobile ? '100%' : 560}
        align={isMobile ? 'center' : 'flex-start'}
        gap={isMobile ? 'md' : 'xl'}
      >
        <Title
          tt="capitalize"
          c={`${colorScheme === 'dark' ? 'var(--text-color)' : 'white'} `}
          ta={isMobile ? 'center' : 'left'}
        >
          Prescription treatments for your{' '}
          <Text
            component="span"
            display="block"
            inherit
            variant="gradient"
            gradient={{ from: '#c1842d', to: '#ecc974', deg: 180 }}
          >
            health goals
          </Text>
        </Title>

        <Button
          variant="outline"
          radius="60"
          size="xl"
          px="30"
          tt="capitalize"
          className="gradient-btn"
          styles={{
            root: {
              border: '2px solid transparent',
              backgroundImage:
                'linear-gradient(#22242D, #22242D), linear-gradient(90deg, #db5095 0%, #1945e8 100%)',
              backgroundOrigin: 'border-box',
              backgroundClip: 'padding-box, border-box',
              color: 'white',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
            },
          }}
        >
          Find my treatment
        </Button>
      </Stack>

      <Box mt={isMobile ? 50 : 147}>
        <SearchSection />
      </Box>
    </Container>
  );
};

export default Home;
