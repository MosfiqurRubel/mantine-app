import { Stack, Anchor, Text } from '@mantine/core';

type Props = {
  title: string;
  links: string[];
};

const FooterLinks = ({ title, links }: Props) => {
  return (
    <Stack gap="lg">
      <Text size="xs" c="white" mb={10}>
        {title}
      </Text>

      {links.map((link) => (
        <Anchor key={link} c="white" size="sm" underline="never">
          {link}
        </Anchor>
      ))}
    </Stack>
  );
};

export default FooterLinks;
