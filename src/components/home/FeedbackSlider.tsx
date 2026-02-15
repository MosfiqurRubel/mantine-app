import { Carousel } from '@mantine/carousel';
import { Container, Text, Title, useMantineColorScheme } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import TestimonialCard from '@/components/TestimonialCard';

const testimonials = [
  {
    text: `I've tried every home remedy and hair care treatment but ended up with long waits and no results. Since I've started using Hims my hair has grown, thickened, and darkened tremendously.`,
    name: 'John Williams',
    role: 'Lead designer',
    avatar: '/avatar.png',
    rating: 4,
  },
  {
    text: `I've tried every home remedy and hair care treatment but ended up with long waits and no results. Since I've started using Hims my hair has grown, thickened, and darkened tremendously.`,
    name: 'John Williams',
    role: 'Lead designer',
    avatar: '/avatar.png',
    rating: 4,
  },
  {
    text: `I've tried every home remedy and hair care treatment but ended up with long waits and no results. Since I've started using Hims my hair has grown, thickened, and darkened tremendously.`,
    name: 'John Williams',
    role: 'Lead designer',
    avatar: '/avatar.png',
    rating: 4,
  },
  {
    text: `I've tried every home remedy and hair care treatment but ended up with long waits and no results. Since I've started using Hims my hair has grown, thickened, and darkened tremendously.`,
    name: 'John Williams',
    role: 'Lead designer',
    avatar: '/avatar.png',
    rating: 4,
  },
  {
    text: `I've tried every home remedy and hair care treatment but ended up with long waits and no results. Since I've started using Hims my hair has grown, thickened, and darkened tremendously.`,
    name: 'John Williams',
    role: 'Lead designer',
    avatar: '/avatar.png',
    rating: 4,
  },
  {
    text: `I've tried every home remedy and hair care treatment but ended up with long waits and no results. Since I've started using Hims my hair has grown, thickened, and darkened tremendously.`,
    name: 'John Williams',
    role: 'Lead designer',
    avatar: '/avatar.png',
    rating: 4,
  },
  {
    text: `I've tried every home remedy and hair care treatment but ended up with long waits and no results. Since I've started using Hims my hair has grown, thickened, and darkened tremendously.`,
    name: 'John Williams',
    role: 'Lead designer',
    avatar: '/avatar.png',
    rating: 4,
  },
];

export type TestimonialProps = (typeof testimonials)[number];

const FeedbackSlider = () => {
  const { colorScheme } = useMantineColorScheme();
  const isMobile = useMediaQuery('(max-width: 48em)'); // < 768px
  return (
    <Container size="1202" px="md" py={{ base: 50, sm: 160 }}>
      <Title
        order={2}
        c={`${colorScheme === 'dark' ? 'var(--text-color)' : 'white'} `}
        tt="capitalize"
        ta="center"
        fz={{ base: 28, sm: 48 }}
        lh={1.2}
        mb={45}
      >
        Hear What
        <Text
          component="span"
          px={10}
          inherit
          variant="gradient"
          gradient={{ from: '#c1842d', to: '#ecc974', deg: 180 }}
        >
          Rizz
        </Text>
        Patients Have To Say
      </Title>

      <Carousel
        withIndicators={isMobile ? false : true}
        withControls={false}
        slideSize={{ base: '80%', sm: '36%' }}
        height={isMobile ? 334 : 440}
        slideGap={{ base: 'sm', sm: 'md' }}
        color="white"
        emblaOptions={{
          loop: true,
          dragFree: false,
          align: isMobile ? 'start' : 'center',
        }}
        className="feedback-controls"
        nextControlIcon
      >
        {testimonials.map((item, index) => (
          <Carousel.Slide color="white" key={index}>
            <TestimonialCard item={item} />
          </Carousel.Slide>
        ))}
      </Carousel>
    </Container>
  );
};

export default FeedbackSlider;
