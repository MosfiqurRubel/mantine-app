import { Container, TextInput, Text } from '@mantine/core';
import { IconSearch } from '@tabler/icons-react';

const SearchSection = () => {
  return (
    <Container size="670" px="0">
      {/* SEARCH INPUT */}
      <TextInput
        size="lg"
        radius="xl"
        placeholder="Search by product/treatment"
        leftSection={<IconSearch size={20} />}
        styles={{
          input: {
            height: 60,
            fontSize: 16,
            backgroundColor: 'rgba(255,255,255,0.08)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255,255,255,0.25)',
            color: '#fff',
          },
        }}
      />

      {/* EMPTY RESULT TEXT */}

      <Text ta="center" mt="md" c="gray.2" fz="md" size="md">
        No results found for
        <Text
          component="span"
          display="inline-block"
          inherit
          variant="gradient"
          fw="600"
          mx="4"
          gradient={{ from: '#c1842d', to: '#ecc974', deg: 180 }}
        >
          "hello world"
        </Text>
        .Check the spelling or use a different word or phrase.
      </Text>
    </Container>
  );
};

export default SearchSection;
