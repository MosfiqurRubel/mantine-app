import { Container, TextInput, Text } from '@mantine/core';
import { IconSearch } from '@tabler/icons-react';

const SearchBar = () => {
  return (
    <Container size="670" px="0">
      <TextInput
        size="lg"
        radius="xl"
        placeholder="Search by product/treatment"
        leftSection={<IconSearch size={24} color="white" />}
        styles={{
          input: {
            height: 60,
            fontSize: 16,
            backgroundColor: 'rgba(67, 67, 67, 0.16)',
            backdropFilter: 'blur(204px)',
            border: '1px solid rgba(255,255,255,1)',
            color: '#fff',
          },
        }}
      />

      {/* <Text ta="center" mt="md" c="gray.2" fz="md" size="md">
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
      </Text> */}
    </Container>
  );
};

export default SearchBar;
