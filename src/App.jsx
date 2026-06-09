import { useState } from 'react'
import { useEffect } from "react"
import { supabase } from "./lib/supabaseClient"
import './index.css'
import './App.css'
import Header from "./components/Header";
import Carousel from "./components/Carousel";
import Hero from "./components/Hero";
import QA from "./components/QA";
import Testimonials from "./components/Testimonials";
import Scroll from "./components/Scroll";
import Divider from "./components/Divider.jsx";
import Divider2 from "./components/Divider2.jsx";
import Mensajes from "./pages/Mensajes.jsx";
import MapModule from "./pages/Contacto.jsx";
import Portfolio from "./pages/Portafolio";
import Services from "./pages/Servicios";
import { Routes, Route } from "react-router-dom";
import Footer from './components/Footer';
import Whatsapp from "./components/BtnWhapp";



function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Scroll />
            <Header />
            <Hero />
            <Carousel />
            <Divider />
            <Testimonials />
            <Divider2 />
            <QA />
            <Whatsapp />
            <Footer />
          </>
        }
      />
      <Route
        path="/cotizar"
        element={
          <>
            <Scroll />
            <Header />
            <Mensajes />
            <Footer />
          </>
        }
      />
      <Route
        path="/servicios"
        element={
          <>
            <Scroll />
            <Header />
            <Services />
            <Footer />
          </>
        }
      />
      <Route
        path="/portafolio"
        element={
          <>
            <Scroll />
            <Header />
            <Portfolio />
            <Footer />
          </>
        }
      />
      <Route
        path="/contacto"
        element={
          <>
            <Scroll />
            <Header />
            {/* <Whatsapp /> */}
            <MapModule />
            <Footer />
          </>
        }
      />
    </Routes>
  );
}


export default App;


