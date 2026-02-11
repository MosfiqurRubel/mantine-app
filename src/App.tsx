import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AppLayout from '@/layout/AppLayout';
import Home from '@/pages/Home';
import About from '@/pages/About';
import Category from '@/pages/Category';
import Products from '@/pages/Products';
import Contact from '@/pages/Contact';
import Faq from '@/pages/Faq';

function App() {
  return (
    <BrowserRouter>
      <AppLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category/*" element={<Category />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<Faq />} />
        </Routes>
      </AppLayout>
    </BrowserRouter>
  );
}

export default App;
