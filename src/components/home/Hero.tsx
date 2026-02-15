import {
  Button,
  Stack,
  Text,
  Title,
  useMantineColorScheme,
  useMantineTheme,
} from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';

const Hero = () => {
  const { colorScheme } = useMantineColorScheme();
  const theme = useMantineTheme();
  const isiPad = useMediaQuery(`(max-width: ${theme.breakpoints.md})`);

  return (
    <Stack
      h={isiPad ? '58vh' : '100%'}
      maw={isiPad ? '100%' : 560}
      align={isiPad ? 'center' : 'flex-start'}
      justify={isiPad ? 'flex-end' : ''}
      gap={isiPad ? 30 : 'xl'}
    >
      <Title
        tt="capitalize"
        c={`${colorScheme === 'dark' ? 'var(--text-color)' : 'white'} `}
        ta={{ base: 'center', md: 'left' }}
        fz={{ base: 36, md: 80 }}
        lh={1.2}
        maw={{ base: 345, md: 560 }}
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
        size={isiPad ? 'md' : 'xl'}
        h={{ base: 46, md: 66 }}
        px={{ base: 13, md: 30 }}
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
