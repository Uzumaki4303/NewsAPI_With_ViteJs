import React, { useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';

export default function Layout() {
  const [selectedNews, setSelectedNews] = useState();

  const getSelectedNews = (name) => {
    setSelectedNews(name);
  };

  const clearSelectedNews = () => {
    setSelectedNews('');  // Clear selected news
  };

  return (
    <>
      <Navbar onSelectedNews={getSelectedNews} />
      <Outlet context={{ selectedNews, clearSelectedNews }} /> {/* Pass clearSelectedNews as context */}
      <Footer />
    </>
  );
}
