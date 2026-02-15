import { Box, Container } from '@mantine/core';
import Hero from '@/components/home/Hero';
import OnlineConvenient from '@/components/home/OnlineConvenient';
import SearchBar from '@/components/ui/SearchBar';
import ShopByCategory from '@/components/home/ShopByCategory';
import FeaturesBanner from '@/components/home/FeaturesBanner';
import FeedbackSlider from '@/components/home/FeedbackSlider';
import ProductsSection from '@/components/home/ProductsSection';

const Home = () => {
  return (
    <>
      <Container size="lg" pb="50">
        <Hero />

        <Box maw={670} mt={{ base: 50, md: 147 }} mx="auto">
          <SearchBar />
        </Box>
      </Container>

      <ShopByCategory />

      <FeaturesBanner />

      <ProductsSection />

      <OnlineConvenient />

      <FeedbackSlider />
    </>
  );
};

export default Home;
