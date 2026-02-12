import {
  Card,
  Text,
  Title,
  Image,
  useMantineColorScheme,
  Container,
  Grid,
} from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import type { Category } from '@/types/types';

import weightLoss from '@/assets/images/weight-loss.png';
import sexualHealth from '@/assets/images/sexual-health.png';
import brainHealth from '@/assets/images/brain-health.png';
import testosterone from '@/assets/images/testosterone.png';
import athletic from '@/assets/images/athletic.png';
import beauty from '@/assets/images/beauty.png';

const categories: Category[] = [
  { title: 'Weight Loss', image: weightLoss },
  { title: 'Sexual Health', image: sexualHealth },
  { title: 'Brain Health', image: brainHealth },
  { title: 'Testosterone HRT', image: testosterone },
  { title: 'Athletic Performance', image: athletic },
  { title: 'Beauty and Hair Loss', image: beauty },
];

const ShopByCategory = () => {
  const { colorScheme } = useMantineColorScheme();
  const isMobile = useMediaQuery('(max-width: 48em)'); // < 768px

  return (
    <Container size="1170" px={isMobile ? 'sm' : 0} pb={{ base: 50, sm: 120 }}>
      <Title
        order={2}
        c={`${colorScheme === 'dark' ? 'var(--text-color)' : 'white'} `}
        tt="capitalize"
        ta="center"
        fz={{ base: 28, sm: 48 }}
        lh={1.2}
        mb={40}
      >
        Shop By
        <Text
          component="span"
          ps={8}
          inherit
          variant="gradient"
          gradient={{ from: '#c1842d', to: '#ecc974', deg: 180 }}
        >
          Category
        </Text>
      </Title>

      <Grid justify="flex-start" align="flex-start" gutter="30">
        {categories.map((cat) => (
          <Grid.Col key={cat.title} span={{ base: 6, sm: 4 }}>
            <Card
              key={cat.title}
              shadow="sm"
              radius={24}
              padding={0}
              withBorder={false}
              style={{ overflow: 'hidden' }}
              top={{
                sm: cat.title === 'Athletic Performance' ? '-5vh' : 0,
                md: cat.title === 'Athletic Performance' ? '-6vh' : 0,
                lg: cat.title === 'Athletic Performance' ? '-7vh' : 0,
              }}
            >
              <Card.Section>
                <Image
                  src={cat.image}
                  alt={cat.title}
                  radius={24}
                  h={{ base: 202, sm: 'auto' }}
                />
              </Card.Section>

              <Text
                fw={500}
                c="white"
                fz={{ base: 18, sm: 36 }}
                lh={1.2}
                maw={200}
                pos={'absolute'}
                top={24}
                left={24}
              >
                {cat.title}
              </Text>
            </Card>
          </Grid.Col>
        ))}
      </Grid>
    </Container>
  );
};

export default ShopByCategory;
