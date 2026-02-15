import {
  Button,
  Stack,
  Text,
  Title,
  useMantineColorScheme,
} from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';

const Hero = () => {
  const { colorScheme } = useMantineColorScheme();
  const isMobile = useMediaQuery('(max-width: 48em)'); // < 768px

  return (
    <Stack
      h={isMobile ? '58vh' : '100%'}
      maw={isMobile ? '100%' : 560}
      align={isMobile ? 'center' : 'flex-start'}
      justify={isMobile ? 'flex-end' : ''}
      gap={isMobile ? 30 : 'xl'}
    >
      <Title
        tt="capitalize"
        c={`${colorScheme === 'dark' ? 'var(--text-color)' : 'white'} `}
        ta={{ base: 'center', sm: 'left' }}
        fz={{ base: 36, sm: 80 }}
        lh={1.2}
        maw={{ base: 345, sm: 560 }}
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
        size={isMobile ? 'md' : 'xl'}
        h={{ base: 46, sm: 66 }}
        px={{ base: 13, sm: 30 }}
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
  );
};

export default Hero;
