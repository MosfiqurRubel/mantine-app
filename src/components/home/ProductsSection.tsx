import {
  ActionIcon,
  Button,
  Container,
  Flex,
  Group,
  Tabs,
  Text,
  Title,
  useMantineColorScheme,
} from '@mantine/core';
import { Carousel } from '@mantine/carousel';
import { useMemo, useState } from 'react';
import type { Product, ProductCategory } from '@/types';
import ProductCard from '@/components/ui/ProductCard';

import retatrutideImg from '@/assets/images/product/retatrutide.png';
import glowImg from '@/assets/images/product/glow.png';
import compoundedImg from '@/assets/images/product/compounded.png';
import ipamorelinImg from '@/assets/images/product/ipamorelin.png';
import sermorelinImg from '@/assets/images/product/sermorelin.png';
import oxytocinImg from '@/assets/images/product/oxytocin.png';
import aodLyophoIgg from '@/assets/images/product/aodLyopho.png';
import nadImg from '@/assets/images/product/nad.png';
import { Icon } from '@/components/ui/Icon';

const products: Product[] = [
  {
    id: '1',
    title: 'Retatrutide',
    image: retatrutideImg,
    price: '$39.99/per month',
    badge: 'Research use only',
    cartGradient: { from: '#f5c16c', to: '#e09b2d' },
    category: 'weight-loss',
  },
  {
    id: '2',
    title: 'Lyophilized Glow (GHK-CU/ BPC-157/ TB-500)',
    image: glowImg,
    price: '$39.99/per month',
    badge: 'Research use only',
    cartGradient: { from: '#f5c16c', to: '#e09b2d' },
    category: 'beauty-hair',
  },
  {
    id: '3',
    title: 'Compounded Sermorelin 15mg',
    image: sermorelinImg,
    price: '$39.99/per month',
    badge: 'Recurring Plan',
    cartGradient: { from: '#f5c16c', to: '#e09b2d' },
    category: 'testosterone',
  },
  {
    id: '4',
    title: '2X CJC / Ipamorelin',
    image: ipamorelinImg,
    price: '$39.99/per month',
    badge: 'Research use only',
    cartGradient: { from: '#f5c16c', to: '#e09b2d' },
    category: 'sexual-health',
  },
  {
    id: '5',
    title: 'Lyopholized Oxytocin',
    image: oxytocinImg,
    price: '$39.99/per month',
    badge: 'Recurring Plan',
    cartGradient: { from: '#f5c16c', to: '#e09b2d' },
    category: 'sexual-health',
  },
  {
    id: '6',
    title: 'Compounded NAD+ 1000 mg',
    image: nadImg,
    price: '$39.99/per month',
    badge: 'Research use only',
    cartGradient: { from: '#f5c16c', to: '#e09b2d' },
    category: 'sexual-health',
  },
  {
    id: '7',
    title: 'Lyopholized AOD 9604 5 mg',
    image: aodLyophoIgg,
    price: '$39.99/per month',
    badge: 'Research use only',
    cartGradient: { from: '#f5c16c', to: '#e09b2d' },
    category: 'testosterone',
  },
  {
    id: '8',
    title: 'Compounded Sermorelin 15 mg',
    image: compoundedImg,
    price: '$39.99/per month',
    badge: 'Recurring Plan',
    cartGradient: { from: '#f5c16c', to: '#e09b2d' },
    category: 'testosterone',
  },
];

const categories = [
  { value: 'all', label: 'All' },
  { value: 'best', label: 'Best Selling Products' },
  { value: 'weight-loss', label: 'Weight Loss' },
  { value: 'sexual-health', label: 'Sexual Health' },
  { value: 'brain-health', label: 'Brain Health' },
  { value: 'testosterone', label: 'Testosterone/HRT' },
  { value: 'athletic-performance', label: 'Athletic Performance' },
  { value: 'beauty-hair', label: 'Beauty And Hair Loss' },
] as const;

const ProductsSection = () => {
  const { colorScheme } = useMantineColorScheme();
  const [activeTab, setActiveTab] = useState<ProductCategory | 'best'>('all');
  const filteredProducts = useMemo(() => {
    if (activeTab === 'all' || activeTab === 'best') return products;
    return products.filter((p) => p.category === activeTab);
  }, [activeTab]);

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

      <Tabs
        value={activeTab}
        onChange={(value) => setActiveTab(value as typeof activeTab)}
        variant="pills"
        mb={50}
        radius="xl"
      >
        <Tabs.List justify="center" pb={20}>
          {categories.map((cat) => (
            <Tabs.Tab
              key={cat.value}
              value={cat.value}
              color="rgba(225, 192, 110, 1)"
              fz="md"
              fw={400}
              style={{
                color: '#fff',
                border: '1px solid #fff',
                paddingInline: 40,
                paddingBlock: 23,
              }}
              className="product-tab-btn"
            >
              {cat.label}
            </Tabs.Tab>
          ))}
        </Tabs.List>

        <Tabs.Panel value={activeTab} pt={66}>
          {/* <Flex
            justify="center"
            wrap="wrap"
            columnGap="30"
            rowGap={{ base: 24, sm: 40 }}
          >
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </Flex> */}

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
            {filteredProducts.map((product) => (
              <Carousel.Slide key={product.id}>
                <ProductCard product={product} />
              </Carousel.Slide>
            ))}
          </Carousel>
        </Tabs.Panel>
      </Tabs>
    </Container>
  );
};

export default ProductsSection;
