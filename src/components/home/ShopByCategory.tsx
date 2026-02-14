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
import { useGetLandingCategoriesQuery } from '@/features/api/apiSlice';

const ShopByCategory = () => {
  const { colorScheme } = useMantineColorScheme();
  const isMobile = useMediaQuery('(max-width: 48em)'); // < 768px

  const {
    data: categories,
    isLoading,
    isError,
    error,
  } = useGetLandingCategoriesQuery();

  // decide what to render
  let content = null;

  if (isLoading) {
    content = (
      <Text
        size="xl"
        fw={900}
        variant="gradient"
        gradient={{ from: 'blue', to: 'cyan', deg: 90 }}
      >
        Loading...
      </Text>
    );
  } else if (isError) {
    console.log('API Error', error);
    {
      JSON.stringify(error);
    }
    content = (
      <Text
        size="xl"
        fw={900}
        variant="gradient"
        gradient={{ from: 'red', to: 'yellow', deg: 90 }}
      >
        There was an error
      </Text>
    );
  } else if (categories?.length === 0) {
    <Text
      size="xl"
      fw={900}
      variant="gradient"
      gradient={{ from: 'blue', to: 'cyan', deg: 90 }}
    >
      No categories found!
    </Text>;
  } else {
    content = categories?.map((cat) => (
      <Grid.Col key={cat.CategoryId} span={{ base: 6, sm: 4 }}>
        <Card
          key={cat.CategoryId}
          shadow="sm"
          radius={24}
          padding={0}
          withBorder={false}
          style={{ overflow: 'hidden' }}
          top={{
            sm: cat.Category === 'Athletic Performance' ? '-5vh' : 0,
            md: cat.Category === 'Athletic Performance' ? '-6vh' : 0,
            lg: cat.Category === 'Athletic Performance' ? '-7vh' : 0,
          }}
        >
          <Card.Section>
            <Image
              src={import.meta.env.VITE_API_URL + cat.CategoryPhotos}
              alt={cat.Category}
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
            {cat.Category}
          </Text>
        </Card>
      </Grid.Col>
    ));
  }

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
          px={10}
          inherit
          variant="gradient"
          gradient={{ from: '#c1842d', to: '#ecc974', deg: 180 }}
        >
          Category
        </Text>
      </Title>

      <Grid justify="flex-start" align="flex-start" gutter="30">
        {content}
      </Grid>
    </Container>
  );
};

export default ShopByCategory;
