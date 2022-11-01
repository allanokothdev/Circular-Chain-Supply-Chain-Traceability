import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import ProductDetail from './containers/ProductDetail';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <section className="w-full px-6 pb-12 antialiased bg-white">
        <Navbar/>
        <ProductDetail/>
        <Footer/>
      </section>
    </div>
  );
}

export default App;

