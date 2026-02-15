import {
  Container,
  Grid,
  Stack,
  Title,
  List,
  ThemeIcon,
  BackgroundImage,
} from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { Icon } from '@/components/ui/Icon';

import servicesImg from '@/assets/service.png';

const OnlineConvenient: React.FC = () => {
  const isMobile = useMediaQuery('(max-width: 48em)'); // 768px

  return (
    <BackgroundImage
      src={servicesImg}
      radius="md"
      h={{ base: 273, sm: 812 }}
      py={{ base: 30, sm: 90 }}
    >
      <Container size="1202" px="md">
        <Grid align="center">
          <Grid.Col span={{ base: 12, md: 6 }}>
            <Stack gap="md" ta="left">
              <Title order={1} c="white" fz={{ base: 32, sm: 58 }} lh={1.2}>
                100% Online,
                <br />
                100% Convenient
              </Title>
            </Stack>
          </Grid.Col>

          <Grid.Col span={{ base: 12, md: 6 }}>
            <List
              spacing="lg"
              size={isMobile ? 'sm' : 'md'}
              center={isMobile}
              fw={500}
              styles={{
                itemLabel: {
                  color: '#fff',
                  fontSize: isMobile ? 16 : 18,
                },
              }}
              icon={
                <ThemeIcon
                  size={20}
                  radius="xl"
                  variant="transparent"
                  color="gray"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  <Icon name="iconChatRight" color="white" />
                </ThemeIcon>
              }
            >
              <List.Item>Chat with a provider 24/7</List.Item>
              <List.Item>Fast, discreet shipping</List.Item>
              <List.Item>
                Clinically proven ingredients and FDA-approved treatments
              </List.Item>
            </List>
          </Grid.Col>
        </Grid>
      </Container>
    </BackgroundImage>
  );
};

export default OnlineConvenient;
