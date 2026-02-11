import { Stack } from '@mantine/core';
import { Link } from 'react-router-dom';

type SidebarProps = {
  collapsed: boolean;
};

const Sidebar = ({ collapsed }: SidebarProps) => {
  return (
    <Stack>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </Stack>
  );
};

export default Sidebar;
