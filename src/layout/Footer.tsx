import {
  Box,
  Container,
  Grid,
  Stack,
  Text,
  TextInput,
  ActionIcon,
  Group,
  Divider,
  Flex,
  Image,
  Center,
} from '@mantine/core';
import { IconSend, IconMail } from '@tabler/icons-react';
import { useMediaQuery } from '@mantine/hooks';
import FooterLinks from '@/components/FooterLinks';
import { Icon } from '@/components/ui/Icon';
const legitBrand = new URL('@/assets/svgs/legitScript.svg', import.meta.url)
  .href;
const hipaaBrand = new URL('@/assets/svgs/hipaa.svg', import.meta.url).href;
const footerBg = new URL('@/assets/rizz-logo-footer.png', import.meta.url).href;

const Footer = () => {
  const isMobile = useMediaQuery('(max-width: 48em)');
  const isIpad = useMediaQuery('(max-width: 62em)');

  return (
    <Box
      py={{ base: 60, md: 100, sm: 80 }}
      style={{
        background:
          'linear-gradient(180deg, rgba(61, 85, 204, 0.7) 0%, rgba(31, 31, 31, 0.1) 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Container size="1170" style={{ position: 'relative' }}>
        <Grid>
          <Grid.Col span={{ base: 12, md: 6 }}>
            <Box
              maw={{ md: 413 }}
              py={35}
              px={{ base: 21, sm: 40 }}
              mb={{ base: 30, sm: 0 }}
              style={{
                borderRadius: 20,
                background: isMobile ? '#1c1c1c' : 'rgba(255,255,255,0.01)',
                border: isMobile
                  ? '2px solid transparent'
                  : '2px solid rgba(255,255,255,0.15)',
              }}
            >
              <Text fz={43} lh={1.3} c="white" ta={'center'}>
                Let's Stay In Touch
              </Text>

              <Text c="white" size="md" mt="lg" ta="center">
                Keep up to date with our latest news & special offers.
              </Text>

              <TextInput
                mt={28}
                radius="md"
                placeholder="enter your email"
                rightSection={
                  <ActionIcon variant="subtle" c="white">
                    <IconSend size={18} />
                  </ActionIcon>
                }
                styles={{
                  input: {
                    height: 60,
                    paddingInlineStart: 24,
                    backgroundColor: 'rgba(255,255,255,0.01)',
                    border: '1px solid rgba(153, 159, 185, 1)',
                    color: 'white',
                  },
                }}
              />
            </Box>
          </Grid.Col>

          <Grid.Col span={{ base: 6, md: 3 }}>
            <FooterLinks
              title="Quick Links"
              links={['Erectile Dysfunction', 'Weight Loss', "Men's Hair Loss"]}
            />

            <Stack gap="lg" mt={{ base: 40, sm: 60 }}>
              <Text size="xs" c="white" mb={10}>
                Contact Info
              </Text>

              <Group gap={isMobile ? 'sm' : 'lg'} hiddenFrom="sm">
                <Icon name="phone" color="white" />
                <Text size="md" c="white">
                  (775) GET-RIZZ
                </Text>
              </Group>

              <Group gap={isMobile ? 'sm' : 'lg'}>
                <IconMail size={18} color="white" />
                <Text size="md" c="white" maw={{ base: 130, sm: 230 }}>
                  {isMobile ? 'info@rizzpharma.com' : 'hello@rizzpharma.com'}
                </Text>
              </Group>
            </Stack>
          </Grid.Col>

          <Grid.Col span={{ base: 6, md: 3 }}>
            <FooterLinks
              title="Our Company"
              links={[
                'HIPAA Notice',
                'Privacy Policy',
                'Return & Refund Policy',
                'Terms Of Use',
                'CCPA Opt-Out',
                'Opt-Out Preferences',
              ]}
            />
          </Grid.Col>
        </Grid>

        <Divider my={{ base: 30, sm: 60 }} color="transparent" />

        <Grid>
          <Grid.Col span={{ base: 12, md: 6 }}>
            <Box maw={{ md: 413 }}>
              <Center h={100}>
                <Image src={hipaaBrand} h={106} w="auto" fit="contain" />
              </Center>
            </Box>
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 6 }}>
            <Stack gap={isIpad ? 40 : 22}>
              <Group gap="sm" justify={isIpad ? 'center' : 'flex-start'}>
                <ActionIcon variant="light" size="lg" radius="xl">
                  <Icon name="facebookCircle" />
                </ActionIcon>
                <ActionIcon variant="light" size="lg" radius="xl">
                  <Icon name="instagramSM" color="#E1306C" />
                </ActionIcon>
              </Group>

              <Flex
                align="center"
                direction={{ base: 'column', md: 'row' }}
                gap={{ base: 'sm', sm: 22 }}
                justify={{ sm: 'center' }}
              >
                <Image src={legitBrand} h={72} w="auto" fit="contain" />

                <Text size="md" c="white" ta={{ base: 'center', sm: 'left' }}>
                  Copyright © {new Date().getFullYear()} Rizz Pharma. All Rights
                  Reserved - Built by Business Web Social
                </Text>
              </Flex>
            </Stack>
          </Grid.Col>
        </Grid>

        <Center mt={{ base: 50, sm: 100 }}>
          <Image
            src={footerBg}
            fit="cover"
            style={{
              position: 'relative',
              opacity: 0.8,
              zIndex: -1,
            }}
          />
        </Center>
      </Container>
    </Box>
  );
};

export default Footer;
