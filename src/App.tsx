import { BrowserRouter, Routes, Route } from 'react-router';
import Navigation from './assets/components/Navbar';
import Home from './assets/pages/home';

export default function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <main className="main-content">
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Home />} />
          {/* <Route path="/about" element={<Join />} /> */}
          {/* Define other routes that you need*/}
        </Routes>
      </main>
    </BrowserRouter>
  );
}
