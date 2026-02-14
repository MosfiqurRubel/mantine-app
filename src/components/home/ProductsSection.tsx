import {
  ActionIcon,
  Container,
  Group,
  Tabs,
  Text,
  Title,
  useMantineColorScheme,
} from '@mantine/core';
import { Carousel } from '@mantine/carousel';
import { useEffect, useMemo, useState } from 'react';
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
  const [embla, setEmbla] = useState<any>(null);
  const [catEmbla, setCatEmbla] = useState<any>(null);
  const [activeTab, setActiveTab] = useState<string>('all');

  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);

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

  const shouldShowNext =
    canScrollNext || (uniqueCategories && uniqueCategories.length > 1);

  useEffect(() => {
    if (!catEmbla) return;

    const updateButtons = () => {
      setCanScrollPrev(catEmbla.canScrollPrev());
      setCanScrollNext(catEmbla.canScrollNext());
    };

    // 🔥 Delay initial calculation
    requestAnimationFrame(() => {
      setTimeout(updateButtons, 0);
    });

    catEmbla.on('select', updateButtons);
    catEmbla.on('reInit', updateButtons);

    return () => {
      catEmbla.off('select', updateButtons);
      catEmbla.off('reInit', updateButtons);
    };
  }, [catEmbla, uniqueCategories?.length]);

  const chunkProducts = (arr: Product[], size = 8) => {
    const chunks = [];
    for (let i = 0; i < arr.length; i += size) {
      chunks.push(arr.slice(i, i + size));
    }
    return chunks;
  };

  const productSlides = useMemo(
    () => chunkProducts(uniqueProducts, 8),
    [uniqueProducts],
  );

  const productCarousel = (
    <Carousel getEmblaApi={setEmbla} withControls={false} draggable>
      {productSlides.map((slideProducts, index) => (
        <Carousel.Slide key={index}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: 30,
            }}
          >
            {slideProducts.map((product) => (
              <ProductCard key={product.ProductId} product={product} />
            ))}
          </div>
        </Carousel.Slide>
      ))}
    </Carousel>
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
  } else if (!productCategories || productCategories?.length === 0) {
    <EmptyState message="No categories found from API." />;
  } else {
    content = (
      <Tabs
        value={activeTab}
        onChange={(value) => setActiveTab(value!)}
        variant="pills"
      >
        {/* CATEGORY CAROUSEL */}
        <Group
          align="center"
          wrap="nowrap"
          style={{ overflow: 'hidden', width: '100%' }}
        >
          {/* LEFT ARROW */}
          {canScrollPrev && (
            <ActionIcon
              radius="xl"
              size={44}
              variant="outline"
              color="gray"
              onClick={() => catEmbla.scrollPrev()}
            >
              <Icon name="arrowNextWhite" width={20} height={12.5} />
            </ActionIcon>
          )}

          {/* CATEGORY SCROLLER */}
          <Carousel
            getEmblaApi={setCatEmbla}
            withControls={false}
            slideSize="auto"
            slideGap={12}
            styles={{
              viewport: {
                overflow: 'hidden',
                maxWidth: '100%',
              },
              container: {
                alignItems: 'center',
              },
            }}
          >
            <Tabs.List
              style={{
                flexWrap: 'nowrap',
                gap: 8,
              }}
            >
              <Carousel.Slide style={{ width: 'auto' }}>
                <Tabs.Tab
                  value="all"
                  className="product-tab-btn"
                  style={{
                    width: '100%',
                    justifyContent: 'center',
                    paddingInline: 32,
                  }}
                >
                  All
                </Tabs.Tab>
              </Carousel.Slide>

              {uniqueCategories?.map((cat) => {
                const value = cat.Category.toLowerCase().replace(/\s+/g, '-');

                return (
                  <Carousel.Slide
                    key={cat.CategoryId}
                    style={{ width: 'auto', flexShrink: 0 }}
                  >
                    <Tabs.Tab
                      value={value}
                      className="product-tab-btn"
                      style={{
                        width: '100%',
                        justifyContent: 'center',
                      }}
                    >
                      {cat.Category}
                    </Tabs.Tab>
                  </Carousel.Slide>
                );
              })}
            </Tabs.List>
          </Carousel>

          {/* RIGHT ARROW */}
          {shouldShowNext && (
            <ActionIcon
              radius="xl"
              size={44}
              variant="filled"
              color="#E1C06E"
              onClick={() => catEmbla.scrollNext()}
            >
              <Icon name="arrowNextWhite" width={20} height={12.5} />
            </ActionIcon>
          )}
        </Group>

        {/* CONTENT */}
        <Tabs.Panel value={activeTab} pt={60}>
          {productCarousel}

          <Group justify="center" mt={40} gap={24}>
            <ActionIcon
              radius="xl"
              size={48}
              color="#E1C06E"
              onClick={() => embla?.scrollPrev()}
            >
              <Icon name="arrowLeftBlack" color="var(--text-color)" />
            </ActionIcon>

            <ActionIcon
              radius="xl"
              size={48}
              color="#E1C06E"
              onClick={() => embla?.scrollNext()}
            >
              <Icon name="arrowRightBlack" color="var(--text-color)" />
            </ActionIcon>
          </Group>
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
