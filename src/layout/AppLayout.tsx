import { AppShell, useMantineColorScheme } from '@mantine/core';
import type { FC, ReactNode } from 'react';
import Header from '@/layout/Header';
import { useDisclosure, useWindowScroll } from '@mantine/hooks';
import Sidebar from '@/layout/Sidebar';
import Footer from '@/layout/Footer';
// import heroImg from '@/assets/Hero.png';

type AppLayoutProps = {
  children: ReactNode;
};

const AppLayout: FC<AppLayoutProps> = ({ children }) => {
  const [mobileOpened, { toggle: toggleMobile }] = useDisclosure();
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const [scroll] = useWindowScroll();

  const isScrolled = scroll.y > 20;
  const isShrink = scroll.y > 80;

  return (
    <AppShell
      transitionDuration={500}
      transitionTimingFunction="ease"
      px="0"
      pb="10"
      header={{ height: isShrink ? 139 : 179 }}
      aside={{
        width: 260,
        breakpoint: 'sm',
        collapsed: { mobile: !mobileOpened, desktop: !mobileOpened },
      }}
      className="dd-app"
    >
      <AppShell.Header
        withBorder={false}
        bg="transparent"
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 1000,
          transition: 'all 0.3s ease',
          background: isScrolled ? 'var(--mantine-color-body)' : 'transparent',
          boxShadow: isScrolled ? '0 4px 20px rgba(0,0,0,0.06)' : 'none',
          backdropFilter: isScrolled ? 'blur(8px)' : 'none',
        }}
      >
        <Header
          mobileOpened={mobileOpened}
          toggleMobile={toggleMobile}
          colorScheme={colorScheme}
          toggleColorScheme={toggleColorScheme}
          shrink={isShrink}
        />
      </AppShell.Header>
      <AppShell.Aside hiddenFrom="sm" p="sm" withBorder={false}>
        <Sidebar collapsed={!mobileOpened} />
      </AppShell.Aside>
      <AppShell.Main pt={53}>{children}</AppShell.Main>
      <AppShell.Footer
        withBorder={false}
        style={{ position: 'relative', backgroundColor: '#1C1C1C' }}
      >
        <Footer />
      </AppShell.Footer>
    </AppShell>
  );
};

export default AppLayout;
