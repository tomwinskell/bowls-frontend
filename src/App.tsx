/** @jsxImportSource @emotion/react */
import { BrowserRouter, Routes, Route } from 'react-router';
import Navigation from './assets/components/Navbar';
import Home from './assets/pages/Home';
import GlobalStyles from './assets/GlobalStyles';
import Contact from './assets/pages/Contact';
import Join from './assets/pages/Join';

const mainContent = {
  width: '100vw',
};

export default function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Navigation />
      <main css={mainContent}>
        <Routes>
          <Route path="/bowls-frontend" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/join" element={<Join />} />
          <Route path="/contact" element={<Contact />} />
          {/* Define other routes that you need*/}
        </Routes>
      </main>
    </BrowserRouter>
  );
}
