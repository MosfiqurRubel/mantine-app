import type { Product, BadgeType } from '@/types';

export const getBadges = (product: Product): BadgeType[] => {
  return [
    product.IsOutOfStock && {
      key: 'out-of-stock',
      label: 'Out of Stock',
      gradientFrom: '#A75356',
      gradientTo: '#D78C6C',
    },
    product.IsCompounded && {
      key: 'compounded',
      label: 'Recurring Plan',
      gradientFrom: 'rgba(108,34,29,.3)',
      gradientTo: 'rgba(149,65,57,.3)',
    },
    product.IsPerMonth && {
      key: 'per-month',
      label: 'Per Month',
      gradientFrom: '#2d6cc1',
      gradientTo: '#74c9ec',
    },
    product.IsPrescriptionGenerationRequired && {
      key: 'prescription',
      label: 'Prescription Required',
      gradientFrom: '#c12d2d',
      gradientTo: '#ec7474',
    },
    product.IsAcknowledgmentRequired && {
      key: 'acknowledgment',
      label: 'Acknowledgment Required',
      gradientFrom: '#c1842d',
      gradientTo: '#ecc974',
    },
    product.IsStartWithLowest && {
      key: 'lowest-price',
      label: 'Starts with Lowest Price',
      gradientFrom: '#2d9c6c',
      gradientTo: '#74ec97',
    },
  ].filter(Boolean) as BadgeType[];
};
