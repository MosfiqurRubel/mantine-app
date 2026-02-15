import { AppShell, useMantineTheme } from '@mantine/core';
import type { FC, ReactNode } from 'react';
import Header from '@/layout/Header';
import { useDisclosure, useMediaQuery, useWindowScroll } from '@mantine/hooks';
import Sidebar from '@/layout/Sidebar';
import Footer from '@/layout/Footer';

type AppLayoutProps = {
  children: ReactNode;
};

const AppLayout: FC<AppLayoutProps> = ({ children }) => {
  const [mobileOpened, { toggle: toggleMobile }] = useDisclosure();
  const [scroll] = useWindowScroll();
  const theme = useMantineTheme();
  const isiPad = useMediaQuery(`(max-width: ${theme.breakpoints.md})`);

  const isScrolled = scroll.y > 20;
  const isShrink = scroll.y > 30;

  const isDesk = !isiPad ? 179 : 92;
  const isMob = isiPad ? 92 : 179;

  return (
    <AppShell
      transitionDuration={500}
      transitionTimingFunction="ease"
      px="0"
      header={{ height: isShrink ? isDesk : isMob }}
      aside={{
        width: 260,
        breakpoint: 'md',
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
          background: isScrolled ? 'rgba(26,41,72,0.7)' : 'transparent',
          boxShadow: isScrolled ? '0 0 12px 1px rgba(29,37,73,0.8)' : 'none',
          backdropFilter: isScrolled ? 'blur(50px)' : 'none',
        }}
      >
        <Header
          mobileOpened={mobileOpened}
          toggleMobile={toggleMobile}
          shrink={isShrink}
        />
      </AppShell.Header>
      <AppShell.Aside hiddenFrom="md" p="md" withBorder={false}>
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
