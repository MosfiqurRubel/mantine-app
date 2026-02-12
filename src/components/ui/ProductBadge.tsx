import { Badge, type BadgeProps } from '@mantine/core';

interface ProductBadgeProps extends Omit<BadgeProps, 'children'> {
  label: string;
  pos?: BadgeProps['pos'];
  top?: number | string;
  right?: number | string;
  py?: number | string;
  px?: number | string;
  fz?: number | string;
  lh?: number | string;
  fw?: number;
  tt?: BadgeProps['tt'];
  variant?: BadgeProps['variant'];
  gradientFrom?: string;
  gradientTo?: string;
  gradientDeg?: number;
}

const ProductBadge = ({
  label,
  pos = 'absolute',
  top = 0,
  right = 0,
  py = 14,
  px = 12,
  fz = 13,
  lh = 1.2,
  fw = 400,
  tt = 'none',
  variant = 'gradient',
  gradientFrom = '#A75356',
  gradientTo = '#D78C6C',
  gradientDeg = 268,
  ...props
}: ProductBadgeProps) => {
  return (
    <Badge
      pos={pos}
      top={top}
      right={right}
      py={py}
      px={px}
      fz={fz}
      lh={lh}
      fw={fw}
      tt={tt}
      variant={variant}
      gradient={{ from: gradientFrom, to: gradientTo, deg: gradientDeg }}
      style={{
        borderTopLeftRadius: 0,
        borderTopRightRadius: 12,
        borderBottomLeftRadius: 12,
        borderBottomRightRadius: 0,
      }}
      {...props}
    >
      {label}
    </Badge>
  );
};

export default ProductBadge;
