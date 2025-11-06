import React from 'react';
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';

// Layout Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Page Components
import Home from './components/pages/landingPage';
import ProductPage from './components/pages/ProductPage';
import ProductPurchasePage from './components/pages/ProductPurchasePage';
import ContactPage from './components/pages/ContactPage';
import HeroPage from './components/pages/HeroPage';


// Wrapper component to handle dynamic product ID fetching for ProductPurchasePage
const ProductPurchaseWrapper: React.FC = () => {
    // We use useParams to extract the dynamic segment from the URL
    const { productId } = useParams();
    
    // Ensure productId is treated as a number
    const id = productId ? parseInt(productId, 10) : 1; 

    // Render the product page component with the extracted ID
    return <ProductPurchasePage productId={id} />;
};


function App() {
  return (
    // 1. BrowserRouter wraps the entire application
    <BrowserRouter>
      <div className="relative">
        <Navbar />
        
        {/* 2. Routes component defines the routing structure */}
        <Routes>
          
          {/* Landing Page Route: / */}
          <Route 
            path="/" 
            element={<Home />} 
          />

          {/* Dynamic Product Purchase Route: /purchase/1, /purchase/2, etc. */}
          {/* We use the wrapper component here to handle the dynamic ID from the URL */}
          <Route 
            path="/purchase/:productId" 
            element={<ProductPurchaseWrapper />} 
          />
          
          {/* Placeholder Routes for future development */}
          <Route 
            path="/products-list" 
            element={<ProductPage />} 
          />
          <Route
          path='/about-us'
          element={<HeroPage />}
          />
          <Route 
            path="/contact" 
            element={<ContactPage />} 
          />

        </Routes>
        
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
