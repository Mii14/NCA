import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { AuthProvider } from './AuthProvider';
import Home from './component/Home';
import Contribute from './component/Contribute';
import PurchaseCC from './component/PurchaseCC';
import Login from './component/Login';
import Register from './component/Register';
import Footer from './component/Footer';
import Header from './component/Header';
import HomeCard from './component/HomeCard';
import LatestNews from './component/LatestNews';
import LogRegInput from './component/LogRegInput';
import Supported from './component/Supported';
import Logout from './component/Logout';
import '../index.css';

// Define routes for the app
const routes = [
  {
    path: "/NCA",
    element: <Home />,
  },
  {
    path: "/NCA/contribute",
    element: <Contribute />,
  },
  {
    path: "/NCA/purchaseCC",
    element: <PurchaseCC />,
  },
  {
    path: "/NCA/login",
    element: <Login />,
  },
  {
    path: "/NCA/register",
    element: <Register />,
  },
  {
    path: "/NCA/logout",
    element: <Logout />,
  },
  // {
  //   path: "*", 
  //   element: <NotFoundPage />,
  // }
];

function App() {
  const [scrolled, setScrolled] = useState(false);

  // Scroll event handler to toggle header styles
  const handleScroll = (event) => {
    const scrollY = event.target.scrollTop;
    setScrolled(scrollY > 0);
  };

  // Set up scroll event listener
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <BrowserRouter basename="/">
          <main id="mainapp" onScrollCapture={handleScroll}>
            {/* Place your Navbar here, passing scrolled state */}
            <Header isScrolled={scrolled} />
            <Routes>
              {routes.map((route, index) => (
                <Route key={index} path={route.path} element={route.element} />
              ))}
            </Routes>
            <Footer />
          </main>
        </BrowserRouter>
      </AuthProvider>
    </QueryClientProvider>
  );
}

export default App;
