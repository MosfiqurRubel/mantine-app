import { Container, Flex } from '@mantine/core';
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

const ProductsSection = () => {
  const [activeTab, setActiveTab] = useState<ProductCategory | 'best'>('all');
  const filteredProducts = useMemo(() => {
    if (activeTab === 'all' || activeTab === 'best') return products;
    return products.filter((p) => p.category === activeTab);
  }, [activeTab]);

  return (
    <Container size="lg" py={{ base: 50, sm: 160 }}>
      {/* <Flex
        justify="center"
        wrap="wrap"
        columnGap="30"
        rowGap={{ base: 24, sm: 40 }}
      >
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </Flex> */}

      <Carousel
        slideSize={{ base: '100%', sm: '50%', md: '33.333%' }}
        slideGap="lg"
        withControls={false}
        draggable
      >
        {filteredProducts.map((product) => (
          <Carousel.Slide key={product.id}>
            <ProductCard product={product} />
          </Carousel.Slide>
        ))}
      </Carousel>
    </Container>
  );
};

export default ProductsSection;
