/** @jsxImportSource @emotion/react */
import { BrowserRouter, Routes, Route } from 'react-router';
import Navigation from './assets/components/Navbar';
import Home from './assets/pages/Home';
import GlobalStyles from './assets/GlobalStyles';
import Contact from './assets/pages/Contact';
import Join from './assets/pages/Join';
import Footer from './assets/layouts/Footer';
import Header from './assets/layouts/Header';

const mainContent = {
  width: '100vw',
};

export default function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Header />
      <Navigation />
      <main css={mainContent}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bowls-frontend" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/join" element={<Join />} />
          <Route path="/contact" element={<Contact />} />
          {/* Define other routes that you need*/}
        </Routes>
      </main>
      <Footer/>
    </BrowserRouter>
  );
}
