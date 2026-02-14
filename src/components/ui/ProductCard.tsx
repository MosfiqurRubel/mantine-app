import { Card, Image, Text, Group, ActionIcon, Center } from '@mantine/core';
import type { Product } from '@/types';
import { getBadges } from '@/utils/badges';
import { Icon } from '@/components/ui/Icon';
import ProductBadge from '@/components/ui/ProductBadge';

const ProductCard = ({ product }: { product: Product }) => {
  const badges = getBadges(product);

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
      {badges.map((badge) => (
        <ProductBadge
          key={badge.key}
          label={badge.label}
          gradientFrom={badge.gradientFrom}
          gradientTo={badge.gradientTo}
        />
      ))}

      <Group h={177} gap={24} ps={30} pe="xs" pt="xs" pb="lg">
        <Center>
          <Image
            src={import.meta.env.VITE_API_URL + product.CoverPhoto}
            alt={product.Name}
            w={70}
            fit="contain"
          />
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
          {product.Name}
        </Text>
      </Group>

      <Group
        justify="space-between"
        bg="rgba(31, 31, 31, 0.3)"
        ps={24}
        gap="xs"
      >
        <Text maw={150} c="white" fz="xs" lineClamp={2}>
          ${product.Price}
        </Text>

        <ActionIcon
          w={86}
          size={42}
          radius={0}
          disabled={product.IsOutOfStock}
          fz="xs"
          tt="uppercase"
          px={10}
          ta="center"
          variant="gradient"
          gradient={{ from: '#f5c16c', to: '#e09b2d' }}
          className="product-action-icon"
          style={{
            borderBottomRightRadius: 12,
            color: 'var(--text-body-color)',
          }}
        >
          {product.IsOutOfStock ? (
            'Out of Stock'
          ) : (
            <Icon name="shoppingCart" color="var(--text-body-color)" />
          )}
        </ActionIcon>
      </Group>
    </Card>
  );
};

export default ProductCard;
