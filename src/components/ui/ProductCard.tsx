import type { Product } from '@/types';
import {
  Card,
  Image,
  Text,
  Group,
  Badge,
  Box,
  ActionIcon,
} from '@mantine/core';
import { Icon } from '@/components/ui/Icon';
import ProductBadge from '@/components/ui/ProductBadge';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <Card
      radius={12}
      p={0}
      bg="rgba(49, 65, 140, 0.3)"
      style={{ overflow: 'hidden' }}
    >
      {product.badge && <ProductBadge label={`${product.badge}`} />}

      <Box p="lg">
        <Image src={product.image} alt={product.title} h={160} fit="contain" />
      </Box>

      <Box px="lg" pb="lg">
        <Text fw={600} fz={{ base: 16, sm: 18 }} c="yellow" lh={1.2} mb="sm">
          {product.title}
        </Text>

        <Group justify="space-between">
          <Text c="white" fw={500}>
            {product.price}
          </Text>

          <ActionIcon
            size={42}
            radius="md"
            variant="gradient"
            gradient={product.cartGradient}
            className="product-action-icon"
          >
            <Icon name="shoppingCart" color="var(--text-body-color)" />
          </ActionIcon>
        </Group>
      </Box>
    </Card>
  );
};

export default ProductCard;
