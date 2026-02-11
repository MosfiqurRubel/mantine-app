import {
  Box,
  Container,
  Grid,
  Stack,
  Text,
  Title,
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
const footerBg = new URL('@/assets/svgs/Branding.svg', import.meta.url).href;

const Footer = () => {
  const isMobile = useMediaQuery('(max-width: 48em)');

  return (
    <Box
      //   py={isMobile ? 20 : 50}
      py={{ base: 60, md: 100, sm: 80 }}
      style={{
        // background: 'linear-gradient(180deg, #2f3d87 100%, #0b0f1a 70%)',
        background:
          'linear-gradient(180deg, rgba(61, 85, 204, 0.7) 0%, rgba(31, 31, 31, 0.1) 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* WATERMARK */}
      {/* <Text
        style={{
          position: 'absolute',
          bottom: '-40px',
          left: '50%',
          transform: 'translateX(-50%)',
          fontSize: 'clamp(6rem, 20vw, 18rem)',
          fontWeight: 800,
          opacity: 0.05,
          pointerEvents: 'none',
          whiteSpace: 'nowrap',
        }}
      >
        RIZZ PHARMA
      </Text> */}

      <Container size="1170" style={{ position: 'relative' }}>
        <Grid>
          {/* NEWSLETTER */}
          <Grid.Col span={{ base: 12, md: 6 }}>
            <Box
              maw={{ md: 413 }}
              p="xl"
              style={{
                borderRadius: 16,
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.15)',
              }}
            >
              <Title order={3} c="white">
                Let’s Stay In Touch
              </Title>

              <Text c="white" size="sm" mt="xs">
                Keep up to date with our latest news & special offers.
              </Text>

              <TextInput
                mt="md"
                radius="xl"
                placeholder="enter your email"
                rightSection={
                  <ActionIcon variant="subtle" c="white">
                    <IconSend size={18} />
                  </ActionIcon>
                }
                styles={{
                  input: {
                    backgroundColor: 'rgba(255,255,255,0.08)',
                    border: '1px solid rgba(255,255,255,0.25)',
                    color: 'white',
                  },
                }}
              />
            </Box>
          </Grid.Col>

          {/* QUICK LINKS */}
          <Grid.Col span={{ base: 6, md: 3 }}>
            <FooterLinks
              title="Quick Links"
              links={['Erectile Dysfunction', 'Weight Loss', "Men's Hair Loss"]}
            />

            <Stack gap="lg" mt={{ base: 30, sm: 60 }}>
              <Text size="xs" c="white" mb={10}>
                Contact Info
              </Text>

              <Group gap="lg">
                <Icon name="phone" color="white" />
                <Text size="md" c="white">
                  (775) GET-RIZZ
                </Text>
              </Group>

              <Group gap="lg">
                <IconMail size={18} color="white" />
                <Text size="md" c="white">
                  hello@rizzpharma.com
                </Text>
              </Group>
            </Stack>
          </Grid.Col>

          {/* COMPANY */}
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

        {/* BOTTOM */}
        <Divider my="xl" color="transparent" />

        <Grid gutter={isMobile ? 40 : 80}>
          <Grid.Col span={{ base: 12, sm: 4 }}>
            <Center>
              <Image src={hipaaBrand} h={106} w="auto" fit="contain" />
            </Center>
          </Grid.Col>
          <Grid.Col span={{ base: 12, sm: 8, md: 8 }}>
            <Stack gap={isMobile ? 40 : 22}>
              <Group gap="sm" justify={isMobile ? 'center' : 'flex-start'}>
                <ActionIcon variant="light" size="lg" radius="xl">
                  <Icon name="facebookCircle" />
                </ActionIcon>
                <ActionIcon variant="light" size="lg" radius="xl">
                  <Icon name="instagramSM" color="#E1306C" />
                </ActionIcon>
              </Group>

              <Flex
                align="center"
                direction={{ base: 'column', sm: 'row' }}
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
        <Image
          src={footerBg}
          fit="cover"
          style={{
            position: 'relative',
            opacity: 0.8,
          }}
        />
      </Container>
    </Box>
  );
};

export default Footer;
