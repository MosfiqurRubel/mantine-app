import { Box, Container } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import Hero from '@/components/home/Hero';
import OnlineConvenienceSection from '@/components/home/OnlineConvenienceSection';
import SearchSection from '@/components/ui/SearchSection';
import ShopByCategory from '@/components/home/ShopByCategory';
import FeaturesBanner from '@/components/home/FeaturesBanner';
import FeedbackSlider from '@/components/home/FeedbackSlider';
import ProductsSection from '@/components/home/ProductsSection';

const Home = () => {
  const isMobile = useMediaQuery('(max-width: 48em)'); // < 768px

  return (
    <>
      <Container size="1170" px={isMobile ? 'sm' : 0} pb="50">
        <Hero />

        <Box mt={isMobile ? 50 : 147}>
          <SearchSection />
        </Box>
      </Container>

      <ShopByCategory />

      <FeaturesBanner />

      <ProductsSection />

      <OnlineConvenienceSection />

      <FeedbackSlider />
    </>
  );
};

export default Home;
