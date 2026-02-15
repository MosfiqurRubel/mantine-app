import {
  Container,
  Group,
  Anchor,
  Button,
  Menu,
  ActionIcon,
  Stack,
  Burger,
  useMantineTheme,
  Image,
} from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import {
  IconChevronDown,
  IconBrandFacebook,
  IconBrandInstagram,
  IconShoppingCart,
  // IconSun,
  // IconMoon,
} from '@tabler/icons-react';
import { Link, NavLink } from 'react-router-dom';
const logo = new URL('/src/assets/logo.svg', import.meta.url).href;

type HeaderProps = {
  mobileOpened: boolean;
  toggleMobile: () => void;
  // colorScheme: 'light' | 'dark';
  // toggleColorScheme: () => void;
  shrink: boolean;
};

const Header = ({
  mobileOpened,
  toggleMobile,
  // colorScheme,
  // toggleColorScheme,
  shrink,
}: HeaderProps) => {
  const theme = useMantineTheme();
  const isiPad = useMediaQuery(`(max-width: ${theme.breakpoints.md})`);

  return (
    <Container size="1202" px="md" h="100%">
      <Group
        h="100%"
        justify="space-between"
        align="flex-start"
        pt={48}
        pb={10}
      >
        <Link to="/">
          <Image
            src={logo}
            alt="Rizz Pharma"
            maw={120}
            height="auto"
            style={{ transitions: 'all 0.3s ease' }}
          />
        </Link>

        <Stack align={isiPad ? 'flex-start' : 'flex-end'} gap="24">
          {!isiPad && (
            <Group gap={50}>
              <Group gap={40}>
                <Anchor
                  component={NavLink}
                  to="/"
                  c="white"
                  td="none"
                  className="link"
                >
                  Home
                </Anchor>

                <Menu trigger="hover" withinPortal>
                  <Menu.Target>
                    <Anchor c="white" td="none" className="link">
                      Category <IconChevronDown size={14} />
                    </Anchor>
                  </Menu.Target>
                  <Menu.Dropdown>
                    <Menu.Item>Medicine</Menu.Item>
                    <Menu.Item>Healthcare</Menu.Item>
                  </Menu.Dropdown>
                </Menu>

                <Menu trigger="hover" withinPortal>
                  <Menu.Target>
                    <Anchor c="white" td="none" className="link">
                      Top Products <IconChevronDown size={14} />
                    </Anchor>
                  </Menu.Target>
                  <Menu.Dropdown>
                    <Menu.Item>Featured</Menu.Item>
                    <Menu.Item>Best Seller</Menu.Item>
                  </Menu.Dropdown>
                </Menu>

                <Anchor
                  component={NavLink}
                  to="/about"
                  c="white"
                  td="none"
                  className="link"
                >
                  About Us
                </Anchor>

                <Anchor
                  component={NavLink}
                  to="/contact"
                  c="white"
                  td="none"
                  className="link"
                >
                  Contact Us
                </Anchor>

                <Anchor
                  component={NavLink}
                  to="/faq"
                  c="white"
                  td="none"
                  className="link"
                >
                  FAQs
                </Anchor>
              </Group>

              <Group gap="16">
                <ActionIcon
                  variant="transparent"
                  p="0"
                  c="white"
                  className="link"
                >
                  <IconBrandInstagram size={24} />
                </ActionIcon>

                <ActionIcon
                  variant="transparent"
                  p="0"
                  color="white"
                  className="link"
                >
                  <IconBrandFacebook size={24} />
                </ActionIcon>
              </Group>
            </Group>
          )}

          <Group gap={isiPad ? 10 : 30}>
            <Button
              visibleFrom="md"
              variant="gradient"
              radius="xl"
              size="sm"
              px="md"
              tt="capitalize"
              className="gradient-btn"
              styles={{
                root: {
                  backgroundImage:
                    'linear-gradient(#e1c06e, #e1c06e), linear-gradient(90deg, #db5095 0%, #1945e8 100%)',
                  backgroundOrigin: 'border-box',
                  backgroundClip: 'padding-box, border-box',
                  color: 'white',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                },
              }}
            >
              Sign up
            </Button>

            <Button
              variant="outline"
              radius="xl"
              size="sm"
              px="md"
              tt="capitalize"
              className="gradient-btn border-none"
              styles={{
                root: {
                  border: '1px solid white',
                  color: 'white',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                },
              }}
            >
              log in
            </Button>

            <ActionIcon
              variant="subtle"
              color="white"
              w="auto"
              h="auto"
              ms={{ base: 0, sm: -2 }}
            >
              <IconShoppingCart size={isiPad ? 28 : 34} />
            </ActionIcon>
            {isiPad && (
              <Burger
                opened={mobileOpened}
                onClick={toggleMobile}
                color="white"
                size={24}
              />
            )}

            {/* <ActionIcon
              variant="outline"
              radius="xl"
              size="lg"
              color="white"
              onClick={toggleColorScheme}
            >
              {colorScheme === 'dark' ? <IconSun /> : <IconMoon />}
            </ActionIcon> */}
          </Group>
        </Stack>
      </Group>
    </Container>
  );
};

export default Header;

// import {
//   ActionIcon,
//   Burger,
//   Button,
//   Container,
//   Group,
//   Stack,
//   Title,
// } from '@mantine/core';
// import { IconMoon, IconSun } from '@tabler/icons-react';
// import { Link } from 'react-router-dom';
// import NavItem from '@/components/NavItem';
// const logo = new URL('/src/assets/logo.svg', import.meta.url).href;

// type HeaderProps = {
//   mobileOpened: boolean;
//   toggleMobile: () => void;
//   colorScheme: 'light' | 'dark';
//   toggleColorScheme: () => void;
//   shrink: boolean;
// };

// const Header = ({
//   mobileOpened,
//   toggleMobile,
//   colorScheme,
//   toggleColorScheme,
//   shrink,
// }: HeaderProps) => {
//   return (
//     <Container
//       px="0"
//       style={{
//         maxWidth: 1170,
//         height: '100%',
//         transition: 'all 0.3s ease',
//         paddingTop: shrink ? 10 : 30,
//         paddingBottom: shrink ? 10 : 20,
//       }}
//     >
//       <Group h="100%" px="md" justify="space-between">
//         <Group>
//           <Link to="/">
//             <img
//               src={logo}
//               alt="RIZZ"
//               style={{
//                 maxWidth: shrink ? 90 : 120,
//                 transition: 'all 0.3s ease',
//               }}
//             />
//           </Link>

//           <Burger
//             opened={mobileOpened}
//             onClick={toggleMobile}
//             hiddenFrom="sm"
//           />
//         </Group>

//         <Stack align="flex-end" gap="24">
//           <Group gap="40">
//             <NavItem to="/" label="Home" />
//             <NavItem to="/about" label="About Us" />

//             <ActionIcon
//               variant="gradient"
//               size="xl"
//               gradient={{ from: 'green', to: 'cyan', deg: 90 }}
//               onClick={toggleColorScheme}
//             >
//               {colorScheme === 'dark' ? <IconSun /> : <IconMoon />}
//             </ActionIcon>
//           </Group>
//           <Group gap="30">
//             <Button
//               variant="gradient"
//               radius="xl"
//               size="sm"
//               px="16"
//               tt="capitalize"
//               className="gradient-btn"
//               styles={{
//                 root: {
//                   backgroundImage:
//                     'linear-gradient(#e1c06e, #e1c06e), linear-gradient(90deg, #db5095 0%, #1945e8 100%)',
//                   backgroundOrigin: 'border-box',
//                   backgroundClip: 'padding-box, border-box',
//                   color: 'white',
//                   cursor: 'pointer',
//                   transition: 'all 0.3s ease',
//                 },
//               }}
//             >
//               Sign up
//             </Button>

//             <Button
//               variant="outline"
//               radius="xl"
//               size="sm"
//               px="16"
//               tt="capitalize"
//               className="gradient-btn border-none"
//               styles={{
//                 root: {
//                   border: '1px solid white',
//                   color: 'white',
//                   cursor: 'pointer',
//                   transition: 'all 0.3s ease',
//                 },
//               }}
//             >
//               log in
//             </Button>
//           </Group>
//         </Stack>
//       </Group>
//     </Container>
//   );
// };

// export default Header;
