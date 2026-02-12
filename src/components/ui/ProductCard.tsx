import type { Product } from '@/types';
import { Card, Image, Text, Group, ActionIcon, Center } from '@mantine/core';
import { Icon } from '@/components/ui/Icon';
import ProductBadge from '@/components/ui/ProductBadge';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <Card
      w={{ base: '100%', sm: 270 }}
      maw={{ sm: 270 }}
      radius={12}
      pt="lg"
      pb={0}
      px={0}
      bg="rgba(49, 65, 140, 0.3)"
      style={{ overflow: 'hidden' }}
    >
      {product.badge && (
        <ProductBadge
          label={`${product.badge}`}
          gradientFrom={`${product.badge === 'Recurring Plan' ? 'rgba(108, 34, 29, 0.3)' : '#A75356'}`}
          gradientTo={`${product.badge === 'Recurring Plan' ? 'rgba(149, 65, 57, 0.3)' : '#D78C6C'}`}
        />
      )}

      <Group h={177} gap={24} ps={30} pe="xs" pt="xs" pb="lg">
        <Center>
          <Image src={product.image} alt={product.title} w={70} fit="contain" />
        </Center>

        <Text
          maw={124}
          lineClamp={6}
          fw={500}
          fz={{ base: 16, sm: 18 }}
          c="yellow"
          lh={1.2}
          mb="sm"
          variant="gradient"
          gradient={{ from: '#C1842D', to: '#ECC974', deg: 180 }}
        >
          {product.title}
        </Text>
      </Group>

      <Group
        justify="space-between"
        bg="rgba(31, 31, 31, 0.3)"
        ps={24}
        gap="xs"
      >
        <Text maw={150} c="white" fz="xs" lineClamp={2}>
          {product.price}
        </Text>

        <ActionIcon
          w={86}
          size={42}
          radius={0}
          variant="gradient"
          gradient={product.cartGradient}
          className="product-action-icon"
          style={{
            borderBottomRightRadius: 12,
          }}
        >
          <Icon name="shoppingCart" color="var(--text-body-color)" />
        </ActionIcon>
      </Group>
    </Card>
  );
};

export default ProductCard;
