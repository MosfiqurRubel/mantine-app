import { Text } from '@mantine/core';
import { NavLink } from 'react-router-dom';
import type { FC } from 'react';

type NavItemProps = {
  to: string;
  label: string;
};

const NavItem: FC<NavItemProps> = ({ to, label }) => {
  return (
    <Text
      component={NavLink}
      fz="16"
      to={to}
      style={({ isActive }: { isActive: boolean }) => ({
        color: isActive ? '#facc15' : '#ffffff',
        fontWeight: isActive ? 600 : 400,
        borderBottom: isActive ? '2px solid #facc15' : 'none',
        textDecoration: 'none',
        // cursor: isActive ? 'default' : 'pointer',
      })}
    >
      {label}
    </Text>
  );
};

export default NavItem;
