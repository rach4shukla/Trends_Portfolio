// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Navbar from './components/Navbar';
import FlipCardSection from './components/FlipCardSection';
import SkillsChart from './components/SkillsCart';
import Footer from './components/Footer';
import BooksSection from './components/BooksSection';
import Work from './components/Work'; 
import About from './components/About';
import Blog from './components/Blog';
import PhotoUploadGallery from './components/PhotoUploadGallery'; 


function App() {
  return (
    <div>
      <Router>
      <Navbar />
      <Routes>
        <Route path="/work" element={<Work />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/gallery" element={<PhotoUploadGallery />} />
      </Routes>
      <Header />
      <FlipCardSection />
      <BooksSection />
      <PhotoUploadGallery />
      <SkillsChart />
      <Footer />
      </Router>
      {/* Other components */}
    </div>
  );
}

export default App;
