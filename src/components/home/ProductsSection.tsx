import {
  ActionIcon,
  Container,
  Tabs,
  Text,
  Title,
  useMantineColorScheme,
} from '@mantine/core';
import { Carousel } from '@mantine/carousel';
import { useMemo, useState } from 'react';
import { useGetLandingProductsQuery } from '@/features/api/apiSlice';
import type { Product } from '@/types';
import { Icon } from '@/components/ui/Icon';
import ProductCard from '@/components/ui/ProductCard';
import LoadingState from '@/components/ui/LoadingState';
import ErrorState from '@/components/ui/ErrorState';
import EmptyState from '@/components/ui/EmptyState';

const ProductsSection = () => {
  const { colorScheme } = useMantineColorScheme();
  const {
    data: productCategories,
    isLoading,
    isError,
    error,
  } = useGetLandingProductsQuery();
  const [activeTab, setActiveTab] = useState<string>('all');

  // Flatten products
  const allProducts: Product[] = useMemo(() => {
    if (!productCategories) return [];
    return productCategories.flatMap((cat) =>
      cat.Products.map((p) => ({
        ...p,
        Category: cat.Category.toLowerCase().replace(/\s+/g, '-'),
      })),
    );
  }, [productCategories]);

  const filteredProducts = useMemo(() => {
    if (activeTab === 'all') return allProducts;
    return allProducts.filter((p) => p.Category === activeTab);
  }, [activeTab, allProducts]);

  const uniqueCategories = productCategories?.filter(
    (cat, index, self) =>
      index === self.findIndex((c) => c.CategoryId === cat.CategoryId),
  );

  const uniqueProducts = filteredProducts.filter(
    (p, index, self) =>
      index === self.findIndex((q) => q.ProductId === p.ProductId),
  );

  // decide what to render
  let content = null;

  if (isLoading) {
    content = <LoadingState message="Fetching products from server..." />;
  } else if (isError) {
    console.log('API Error', error);
    {
      JSON.stringify(error);
    }
    content = <ErrorState error={error} />;
  } else if (productCategories?.length === 0) {
    <EmptyState message="No categories found from API." />;
  } else {
    content = (
      <Tabs
        value={activeTab}
        onChange={(value) => setActiveTab(value!)}
        variant="pills"
        mb={50}
        radius="xl"
      >
        <Tabs.List justify="center" pb={20}>
          {/* Always show "All" */}
          <Tabs.Tab
            value="all"
            className="product-tab-btn"
            fz="md"
            fw={400}
            style={{
              color: '#fff',
              border: '1px solid #fff',
              paddingInline: 40,
              paddingBlock: 23,
            }}
          >
            All
          </Tabs.Tab>
          {/* Dynamic categories from API */}
          {uniqueCategories?.map((cat) => (
            <Tabs.Tab
              key={cat.CategoryId}
              value={cat.Category.toLowerCase().replace(/\s+/g, '-')}
              className="product-tab-btn"
              fz="md"
              fw={400}
              style={{
                color: '#fff',
                border: '1px solid #fff',
                paddingInline: 40,
                paddingBlock: 23,
              }}
            >
              {cat.Category}
            </Tabs.Tab>
          ))}
        </Tabs.List>
        <Tabs.Panel value={activeTab} pt={66}>
          <Carousel
            slideSize={{ base: '100%', sm: '50%', md: '33.333%', lg: '25%' }}
            slideGap={30}
            draggable
            nextControlIcon={
              <ActionIcon
                radius="xl"
                size={48}
                variant="filled"
                color="#E1C06E"
                component="div"
              >
                <Icon name="arrowRightBlack" color="var(--text-color)" />
              </ActionIcon>
            }
            previousControlIcon={
              <ActionIcon
                radius="xl"
                size={48}
                variant="filled"
                color="#E1C06E"
                component="div"
              >
                <Icon name="arrowLeftBlack" color="var(--text-color)" />
              </ActionIcon>
            }
            className="product-controls-btn"
          >
            {uniqueProducts.map((product) => (
              <Carousel.Slide key={product.ProductId}>
                <ProductCard product={product} />
              </Carousel.Slide>
            ))}
          </Carousel>
        </Tabs.Panel>
      </Tabs>
    );
  }

  return (
    <Container size="1202" py={{ base: 50, sm: 160 }}>
      <Title
        order={2}
        c={`${colorScheme === 'dark' ? 'var(--text-color)' : 'white'} `}
        tt="capitalize"
        ta="center"
        fz={{ base: 28, sm: 48 }}
        lh={1.2}
        mb={45}
      >
        Solutions for Your
        <Text
          component="span"
          px={10}
          inherit
          variant="gradient"
          gradient={{ from: '#c1842d', to: '#ecc974', deg: 180 }}
        >
          Unique
        </Text>
        Health Goals
      </Title>

      {content}
    </Container>
  );
};

export default ProductsSection;
