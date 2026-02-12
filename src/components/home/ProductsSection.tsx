import { Container, Grid } from '@mantine/core';
import type { Product } from '@/types';
import ProductCard from '@/components/ui/ProductCard';

import retatrutideImg from '@/assets/images/product/product-img-1.png';
import glowImg from '@/assets/images/product/product-img-1.png';

const products: Product[] = [
  {
    id: '1',
    title: 'Retatrutide',
    image: retatrutideImg,
    price: '$39.99/per month',
    badge: 'Research use only',
    cartGradient: { from: '#ff5da2', to: '#6a5cff' },
  },
  {
    id: '2',
    title: 'Lyophilized Glow (GHK-CU/ BPC-157/ TB-500)',
    image: glowImg,
    price: '$39.99/per month',
    badge: 'Research use only',
    cartGradient: { from: '#f5c16c', to: '#e09b2d' },
  },
];

const ProductsSection = () => {
  return (
    <Container size="lg" py={80}>
      <Grid>
        {products.map((product) => (
          <Grid.Col key={product.id} span={{ base: 12, sm: 6, md: 4 }}>
            <ProductCard product={product} />
          </Grid.Col>
        ))}
      </Grid>
    </Container>
  );
};

export default ProductsSection;
