import {
  Card,
  Text,
  Title,
  Image,
  useMantineColorScheme,
  Container,
  Grid,
  AspectRatio,
} from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { useGetLandingCategoriesQuery } from '@/features/api/apiSlice';
import LoadingState from '@/components/ui/LoadingState';
import ErrorState from '@/components/ui/ErrorState';
import EmptyState from '@/components/ui/EmptyState';

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
    content = <LoadingState message="Fetching categories from server..." />;
  } else if (isError) {
    content = <ErrorState error={error} />;
  } else if (!categories || categories?.length === 0) {
    <EmptyState message="No categories found from API." />;
  } else {
    content = categories?.map((cat) => (
      <Grid.Col key={cat.CategoryId} span={{ base: 6, sm: 6, md: 4 }}>
        <Card
          key={cat.CategoryId}
          shadow="sm"
          radius={24}
          padding={0}
          withBorder={false}
          style={{ overflow: 'hidden' }}
          top={{
            md: cat.Category === 'Athletic Performance' ? '-60px' : 0,
          }}
        >
          <Card.Section style={{ overflow: 'hidden' }}>
            {isMobile ? (
              <AspectRatio ratio={3 / 4} style={{ overflow: 'hidden' }}>
                <Image
                  src={import.meta.env.VITE_API_URL + cat.CategoryPhotos}
                  alt={cat.Category}
                  fit="cover"
                  radius={24}
                />
              </AspectRatio>
            ) : (
              <Image
                src={import.meta.env.VITE_API_URL + cat.CategoryPhotos}
                alt={cat.Category}
                radius={24}
                fit="cover"
                width="100%"
                h={{ base: 203, sm: 450, md: 'auto' }}
              />
            )}
          </Card.Section>

          <Text
            fw={500}
            c="white"
            fz={{ base: 18, md: 36 }}
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
    <Container size="1202" px="md" pb={{ base: 50, sm: 120 }}>
      <Title
        order={2}
        c={`${colorScheme === 'dark' ? 'var(--text-color)' : 'white'} `}
        tt="capitalize"
        ta="center"
        fz={{ base: 28, sm: 48 }}
        lh={1.2}
        mb={{ base: 30, sm: 46 }}
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

      <Grid
        justify="flex-start"
        align="flex-start"
        gutter={{ base: 15, md: 30 }}
      >
        {content}
      </Grid>
    </Container>
  );
};

export default ShopByCategory;
